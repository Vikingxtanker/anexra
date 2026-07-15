import { NextResponse } from "next/server";

import cashfree from "@/lib/cashfree";
import { createClient } from "@/lib/supabase/server";

import crypto from "node:crypto";

export async function POST(req: Request) {
  try {
    const { courseId } = await req.json();

    if (!courseId) {
      return NextResponse.json(
        {
          error: "Course ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        {
          error: "Unauthorized.",
        },
        {
          status: 401,
        }
      );
    }

    const {
      data: profile,
      error: profileError,
    } = await supabase
      .from("profiles")
      .select("mobile_number")
      .eq("id", user.id)
      .single();

    if (
      profileError ||
      !profile?.mobile_number
    ) {
      return NextResponse.json(
        {
          error:
            "Please add your mobile number to your profile before purchasing a course.",
        },
        {
          status: 400,
        }
      );
    }

    // Check if already purchased
    const { data: existingPurchase } = await supabase
      .from("course_purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .maybeSingle();

    if (existingPurchase) {
      return NextResponse.json(
        {
          error: "Course already purchased.",
        },
        {
          status: 409,
        }
      );
    }

    // Fetch course
    const {
      data: course,
      error: courseError,
    } = await supabase
      .from("courses")
      .select("id,title,price")
      .eq("id", courseId)
      .single();

    if (courseError || !course) {
      return NextResponse.json(
        {
          error: "Course not found.",
        },
        {
          status: 404,
        }
      );
    }

    const amount = Number(course.price);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        {
          error: "Invalid course price.",
        },
        {
          status: 400,
        }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ??
      "http://localhost:3000";

    // Cashfree allows letters, numbers, _ and -
    // Keep below 45 characters.
    const orderId =
      `ANX_${crypto.randomUUID().replace(/-/g, "").slice(0, 24)}`;

    const customerName =
      user.user_metadata?.full_name ??
      user.user_metadata?.name ??
      "Customer";

    const customerEmail =
      user.email ??
      "customer@anexra.com";

    const customerPhone =
      profile.mobile_number
        .replace(/\D/g, "");

    if (
      !/^[6-9]\d{9}$/.test(customerPhone)
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid mobile number in your profile.",
        },
        {
          status: 400,
        }
      );
    }

    const orderRequest = {
      order_id: orderId,

      order_amount: amount,

      order_currency: "INR",

      customer_details: {
        customer_id: user.id,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
      },

      order_meta: {
        return_url:
          `${baseUrl}/student/payment-success?order_id={order_id}`,

        notify_url:
          `${baseUrl}/api/cashfree/webhook`,
      },

      order_tags: {
        user_id: user.id,
        course_id: course.id,
        amount: String(amount),
      },

      order_note: `Purchase of ${course.title}`,
    };

    console.log(
      "Cashfree Order Request:",
      JSON.stringify(orderRequest, null, 2)
    );

    const response =
        await cashfree.PGCreateOrder(
            orderRequest,
            undefined,
            crypto.randomUUID()
        );
    
    console.log(
      JSON.stringify(response.data, null, 2)
    );

    return NextResponse.json({
      success: true,

      order_id: response.data.order_id,

      cf_order_id:
        response.data.cf_order_id,

      payment_session_id:
        response.data.payment_session_id,
    });
  } catch (error: any) {
    console.error(
      "Cashfree Create Order Error:",
      JSON.stringify(
        error?.response?.data ?? error,
        null,
        2
      )
    );

    return NextResponse.json(
      {
        error:
          error?.response?.data?.message ??
          error?.message ??
          "Unable to create Cashfree order.",
      },
      {
        status: 500,
      }
    );
  }
}
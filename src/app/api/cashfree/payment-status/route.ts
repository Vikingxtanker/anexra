import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(
  request: NextRequest
) {
  try {
    const orderId =
      request.nextUrl.searchParams.get(
        "order_id"
      );

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing order_id.",
        },
        {
          status: 400,
        }
      );
    }

    const supabase =
      await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized.",
        },
        {
          status: 401,
        }
      );
    }

    const {
      data: purchase,
      error: purchaseError,
    } = await supabase
      .from("course_purchases")
      .select(`
        course_id,
        payment_status,
        gateway_order_id
      `)
      .eq(
        "gateway_order_id",
        orderId
      )
      .eq(
        "user_id",
        user.id
      )
      .maybeSingle();

    if (purchaseError) {
      console.error(
        purchaseError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify payment.",
        },
        {
          status: 500,
        }
      );
    }

    // Webhook hasn't completed yet
    if (!purchase) {
      return NextResponse.json({
        success: true,
        completed: false,
      });
    }

    const {
      data: course,
      error: courseError,
    } = await supabase
      .from("courses")
      .select(
        "id, slug, title"
      )
      .eq(
        "id",
        purchase.course_id
      )
      .single();

    if (courseError || !course) {
      console.error(
        courseError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Course not found.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,

      completed: true,

      paymentStatus:
        purchase.payment_status,

      courseId:
        course.id,

      courseSlug:
        course.slug,

      courseTitle:
        course.title,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
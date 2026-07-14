import { NextResponse } from "next/server";

import cashfree from "@/lib/cashfree";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  try {
    const signature =
      req.headers.get("x-webhook-signature");

    const timestamp =
      req.headers.get("x-webhook-timestamp");

    if (!signature || !timestamp) {
      return NextResponse.json(
        {
          error: "Missing webhook headers.",
        },
        {
          status: 400,
        }
      );
    }

    const rawBody = await req.text();

    const event =
      cashfree.PGVerifyWebhookSignature(
        signature,
        rawBody,
        timestamp
      );

    console.log(
      "========== CASHFREE =========="
    );
    console.log(
      "Event Type:",
      event.type
    );
    console.log(
      JSON.stringify(
        event.object,
        null,
        2
      )
    );
    console.log(
      "=============================="
    );

    if (
      event.type !==
      "PAYMENT_SUCCESS_WEBHOOK"
    ) {
      return NextResponse.json({
        success: true,
        ignored: true,
      });
    }

    const payload = event.object;

    const payment =
      payload.data?.payment;

    const order =
      payload.data?.order;

    if (
      payment?.payment_status !==
      "SUCCESS"
    ) {
      return NextResponse.json({
        success: true,
        ignored: true,
      });
    }

    const orderTags =
      order?.order_tags;

    if (
      !payment?.cf_payment_id ||
      !order?.order_id ||
      !payment?.payment_amount
    ) {
      return NextResponse.json(
        {
          error:
            "Incomplete payment payload.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !orderTags?.user_id ||
      !orderTags?.course_id
    ) {
      console.error(
        "Missing order tags."
      );

      return NextResponse.json(
        {
          error:
            "Missing order tags.",
        },
        {
          status: 400,
        }
      );
    }

    // Prevent duplicate webhook deliveries
    const {
      data: existingPurchase,
    } = await supabaseAdmin
      .from("course_purchases")
      .select("id")
      .eq(
        "gateway_payment_id",
        payment.cf_payment_id
      )
      .maybeSingle();

    if (existingPurchase) {
      return NextResponse.json({
        success: true,
        duplicate: true,
      });
    }

    const { error } =
      await supabaseAdmin
        .from("course_purchases")
        .insert({
          user_id:
            orderTags.user_id,

          course_id:
            orderTags.course_id,

          amount_paid:
            payment.payment_amount,

          gateway_payment_id:
            payment.cf_payment_id,

          gateway_order_id:
            order.order_id,
          
          gateway_reference_id:
            payload.data
            ?.payment_gateway_details
            ?.gateway_order_id,

          payment_gateway:
            "cashfree",

          payment_status:
            payment.payment_status,
        });

    if (error) {
      console.error(
        "Database insert failed:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Failed to save purchase.",
        },
        {
          status: 500,
        }
      );
    }

    console.log(
      `Course unlocked for user ${orderTags.user_id}`
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error(
      "Webhook Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Webhook verification failed.",
      },
      {
        status: 400,
      }
    );
  }
}
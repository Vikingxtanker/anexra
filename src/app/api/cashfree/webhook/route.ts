import { NextResponse } from "next/server";

import cashfree from "@/lib/cashfree";

export async function POST(req: Request) {
  try {
    const signature =
      req.headers.get("x-webhook-signature");

    const timestamp =
      req.headers.get("x-webhook-timestamp");

    if (!signature || !timestamp) {
      return NextResponse.json(
        { error: "Missing webhook headers." },
        { status: 400 }
      );
    }

    const rawBody = await req.text();

    const event =
      cashfree.PGVerifyWebhookSignature(
        signature,
        rawBody,
        timestamp
      );

    console.log("========== CASHFREE ==========");
    console.log("Event Type:");
    console.log(event.type);

    console.log("Payload:");
    console.log(
      JSON.stringify(
        event.object,
        null,
        2
      )
    );

    console.log("==============================");

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Webhook verification failed.",
      },
      {
        status: 400,
      }
    );
  }
}
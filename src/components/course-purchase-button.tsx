"use client";

import { useState } from "react";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { load } from "@cashfreepayments/cashfree-js";

interface Props {
  courseId: string;
}

export default function CoursePurchaseButton({
  courseId,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const handlePurchase =
    async () => {
      if (loading) return;

      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/cashfree/create-order",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                courseId,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ??
              "Unable to create order."
          );
        }

        if (
          !data.payment_session_id
        ) {
          throw new Error(
            "Payment session not received."
          );
        }

        const cashfree =
          await load({
            mode:
              process.env
                .NODE_ENV ===
              "production"
                ? "production"
                : "sandbox",
          });

        if (!cashfree) {
          throw new Error(
            "Unable to load Cashfree SDK."
          );
        }

        await cashfree.checkout({
          paymentSessionId:
            data.payment_session_id,

          redirectTarget:
            "_self",
        });
      } catch (error: any) {
        console.error(error);

        alert(
          error.message ??
            "Unable to start payment."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <Button
      onClick={handlePurchase}
      disabled={loading}
      className="bg-[#4c1711] hover:bg-[#5f1d16]"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Redirecting...
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
  );
}
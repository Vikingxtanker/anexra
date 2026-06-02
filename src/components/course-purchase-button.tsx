"use client";

import { useState } from "react";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Props {
  courseId: string;
  amount: number;
}

export default function CoursePurchaseButton({
  courseId,
  amount,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const handlePurchase =
    async () => {
      if (loading) return;

      try {
        setLoading(true);

        const orderRes =
          await fetch(
            "/api/create-order",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                amount:
                  amount * 100,
                courseId,
              }),
            }
          );

        if (!orderRes.ok) {
          throw new Error(
            "Failed to create Razorpay order"
          );
        }

        const order =
          await orderRes.json();

        if (!order.id) {
          throw new Error(
            order.error ||
              "Failed to create order"
          );
        }

        const options = {
          key:
            process.env
              .NEXT_PUBLIC_RAZORPAY_KEY_ID,

          amount: order.amount,

          currency:
            order.currency,

          order_id: order.id,

          name: "Anexra",

          description:
            "Course Purchase",

          modal: {
            ondismiss: () => {
              setLoading(false);
            },
          },

          handler: async (
            response: any
          ) => {
            try {
              const verifyRes =
                await fetch(
                  "/api/verify-payment",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type":
                        "application/json",
                    },
                    body: JSON.stringify({
                      ...response,
                      courseId,
                      amountPaid: amount,
                    }),
                  }
                );

              const result =
                await verifyRes.json();

              if (
                result.success
              ) {
                window.location.reload();
              } else {
                alert(
                  "Payment verification failed"
                );
              }
            } catch {
              alert(
                "Verification failed"
              );
            } finally {
              setLoading(false);
            }
          },
        };

        const razorpay =
          new window.Razorpay(
            options
          );

        razorpay.on(
          "payment.failed",
          function (
            response: any
          ) {
            setLoading(false);

            alert(
              response.error
                ?.description ||
                "Payment failed"
            );
          }
        );

        razorpay.open();
      } catch (error) {
        console.error(error);

        setLoading(false);

        alert(
          "Unable to start payment"
        );
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
          Creating Order...
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
  );
}
"use client";

import { useEffect, useMemo, useState, useRef } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Circle,
} from "lucide-react";

import confetti
  from "canvas-confetti";

import {
  DotLottieReact,
} from "@lottiefiles/dotlottie-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

type Status =
  | "verifying"
  | "success"
  | "timeout"
  | "error";

const MAX_WAIT = 20_000;

const POLL_INTERVAL = 2_000;

const REDIRECT_DELAY = 8_000;

const fireConfetti = () => {
  const duration = 2200;

  const animationEnd =
    Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 70,
      origin: {
        x: 0,
        y: 0.65,
      },
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 70,
      origin: {
        x: 1,
        y: 0.65,
      },
    });

    if (
      Date.now() <
      animationEnd
    ) {
      requestAnimationFrame(
        frame
      );
    }
  })();
};

export default function PaymentSuccessPage() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const orderId = useMemo(
    () =>
      searchParams.get(
        "order_id"
      ),
    [searchParams]
  );

  const [status, setStatus] =
    useState<Status>(
      "verifying"
    );

const hasCelebrated =
  useRef(false);

  const [courseId, setCourseId] =
    useState("");

  const [courseTitle, setCourseTitle] =
    useState("");

    const pollInterval =
    useRef<NodeJS.Timeout | null>(
        null
    );

    const redirectTimeout =
    useRef<NodeJS.Timeout | null>(
        null
    );

    const startedAt =
    useRef(Date.now());

  useEffect(() => {
  if (!orderId) {
    setStatus("error");
    return;
  }

  let mounted = true;

  const checkPayment =
    async () => {
      try {
        const response =
          await fetch(
            `/api/cashfree/payment-status?order_id=${orderId}`,
            {
              cache:
                "no-store",
            }
          );

        const data =
          await response.json();

        if (!mounted)
          return;

        if (
          !response.ok
        ) {
          setStatus(
            "error"
          );

          if (
            pollInterval.current
          ) {
            clearInterval(
              pollInterval.current
            );
          }

          return;
        }

        if (
          data.completed
        ) {
          if (
            pollInterval.current
          ) {
            clearInterval(
              pollInterval.current
            );
          }

          setCourseId(
            data.courseId
          );

          setCourseTitle(
            data.courseTitle
          );

          setStatus(
            "success"
          );

          if (!hasCelebrated.current) {
            fireConfetti();
            hasCelebrated.current = true;
          }

          redirectTimeout.current =
            setTimeout(
              () => {
                router.replace(
                  `/student/continue/${data.courseId}`
                );
              },
              REDIRECT_DELAY
            );

          return;
        }

        if (
          Date.now() -
            startedAt.current >
          MAX_WAIT
        ) {
          clearInterval(
            pollInterval.current!
          );

          setStatus(
            "timeout"
          );
        }
      } catch {
        if (
          !mounted
        )
          return;

        setStatus(
          "error"
        );

        clearInterval(
          pollInterval.current!
        );
      }
    };

  checkPayment();

  pollInterval.current =
    setInterval(
      checkPayment,
      POLL_INTERVAL
    );

  return () => {
    mounted = false;

    if (
      pollInterval.current
    ) {
      clearInterval(
        pollInterval.current
      );
    }

    if (
      redirectTimeout.current
    ) {
      clearTimeout(
        redirectTimeout.current
      );
    }
  };
}, [orderId, router]);

  return (
    <section className="min-h-screen bg-[#f4efee] flex items-center justify-center px-6 py-24">

      <Card className="w-full max-w-2xl rounded-3xl border-[#d8c7c9] shadow-2xl backdrop-blur-sm">

        <CardContent className="p-10 text-center">

          {status ===
            "verifying" && (
            <>
              <DotLottieReact
                src="/animations/payment-processing.lottie"
                autoplay
                loop
                className="mx-auto h-40 w-40"
                />

              <h1 className="mt-8 text-3xl font-bold text-[#4c1711]">
                Verifying your payment
              </h1>

              <p className="mt-4 text-[#87565b] leading-7">
                Your payment has been received.

                <br />

                We are securely confirming it before unlocking your course.

              </p>

              <div className="mx-auto mt-8 max-w-sm space-y-4 text-left">

                <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>
                    Payment received
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-[#4c1711]" />
                    <span>
                    Verifying payment
                    </span>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                    <Circle className="h-5 w-5" />
                    <span>
                    Unlocking your course
                    </span>
                </div>

                </div>

              <p className="mt-6 text-sm text-[#87565b]">
                This usually takes
                less than 5
                seconds.
              </p>
            </>
          )}

          {status ===
            "success" && (
            <>
              <DotLottieReact
                src="/animations/payment-sucessful.lottie"
                autoplay
                loop={false}
                className="mx-auto h-48 w-48"
                />

              <h1 className="mt-6 text-3xl font-bold text-[#4c1711]">
                Payment Successful
              </h1>

              <p className="mt-4 text-[#87565b]">
                Your payment has been securely verified and your course has been unlocked.

              </p>

              <p className="mt-2 font-medium text-[#4c1711]">
                {courseTitle ??
                    "Your Course"}
                </p>

              <div className="mx-auto mt-8 max-w-sm space-y-4 text-left">

                <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Payment received</span>
                </div>

                <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Payment verified</span>
                </div>

                <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Course unlocked</span>
                </div>

                </div>

              <p className="mt-6 text-[#87565b]">
                Redirecting you to your course...
              </p>

              <Button
                className="mt-8 bg-[#4c1711] hover:bg-[#5f1d16]"
                onClick={() =>
                  router.push(
                    `/student/continue/${courseId}`
                  )
                }
              >
                Go to Course

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {status ===
            "timeout" && (
            <>
              <AlertCircle className="mx-auto h-16 w-16 text-amber-500" />

              <h1 className="mt-6 text-3xl font-bold text-[#4c1711]">
                Still verifying...
              </h1>

              <p className="mt-4 text-[#87565b] leading-7">
                Your payment is being processed.

                <br />

                Please don't close this page.

                <br /><br />

                We'll continue checking automatically.

              </p>

              <Button
                className="mt-8 bg-[#4c1711] hover:bg-[#5f1d16]"
                onClick={() =>
                  window.location.reload()
                }
              >
                Check Again
              </Button>
            </>
          )}

          {status ===
            "error" && (
            <>
              <AlertCircle className="mx-auto h-16 w-16 text-red-500" />

              <h1 className="mt-6 text-3xl font-bold text-[#4c1711]">
                Unable to verify payment
              </h1>

              <p className="mt-4 text-[#87565b] leading-7">
                We couldn't verify your payment at the moment.

                <br /><br />

                If your payment has been deducted,
                it will be processed automatically.

              </p>

              <Button
                className="mt-8 bg-[#4c1711] hover:bg-[#5f1d16]"
                onClick={() =>
                  router.push(
                    "/student/dashboard"
                  )
                }
              >
                Return to Dashboard
              </Button>
            </>
          )}

        </CardContent>

      </Card>

    </section>
  );
}
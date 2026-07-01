"use client";

import Image from "next/image";
import { ExternalLink, Copy, CircleAlert } from "lucide-react";
import { toast } from "sonner";

import { Smartphone } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface ManualPurchaseDialogProps {
  courseTitle: string;
  amount: number;
}

const UPI_ID = "7058963791@ikwik";
const GOOGLE_FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLSdJhJSY6OSkE87yuXMO5DIc2srHm9LPvSPxn-gNJJ6scD_rRw/viewform";

export default function ManualPurchaseDialog({
  courseTitle,
  amount,
}: ManualPurchaseDialogProps) {

    const formUrl =
  `${GOOGLE_FORM_BASE}?usp=pp_url` +
  `&entry.982174224=${encodeURIComponent(courseTitle)}` +
  `&entry.1752925045=${encodeURIComponent(amount.toString())}`;

  const UPI_LINK =
  `upi://pay?` +
  `pa=${encodeURIComponent(UPI_ID)}` +
  `&pn=${encodeURIComponent("Anexra")}` +
  `&am=${encodeURIComponent(amount.toString())}` +
  `&tn=${encodeURIComponent(`Payment for ${courseTitle}`)}` +
  `&cu=INR`;

  async function copyUPI() {
    await navigator.clipboard.writeText(UPI_ID);

    toast.success("UPI ID copied");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-[#4c1711] hover:bg-[#5f1d16]"
        >
          Purchase Course
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
            !w-[calc(100vw-2rem)]
            !max-w-5xl
            h-auto
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border-[#d8c7c9]
            p-0
        "
        >
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left */}

          <div className="border-b border-[#e8dede] bg-white p-8 lg:border-b-0 lg:border-r">

            <DialogHeader>

              <DialogTitle className="text-3xl text-[#4c1711]">
                Complete Your Payment
              </DialogTitle>

              <DialogDescription className="mt-2 text-[#87565b]">
                Scan the QR code below using any UPI app.
              </DialogDescription>

            </DialogHeader>

            <div className="mt-8 flex justify-center">
              <div className="mx-auto w-full max-w-md rounded-3xl border border-[#d8c7c9] bg-white p-6 shadow-xl">

                <Image
                    src="/images/payment/anexra-upi-qr.jpeg"
                    alt="UPI QR"
                    width={500}
                    height={500}
                    className="mx-auto h-auto w-full max-w-[420px]"
                />

              </div>
            </div>

            <div className="mt-6 md:hidden">
                <Button
                    asChild
                    className="w-full bg-[#4c1711] hover:bg-[#5f1d16]"
                >
                    <a href={UPI_LINK}>
                    <Smartphone className="mr-2 h-4 w-4" />
                    Pay via UPI App
                    </a>
                </Button>

                <p className="mt-2 text-center text-xs text-[#87565b]">
                    Opens Google Pay, PhonePe, Paytm, BHIM or any installed UPI app.
                </p>
            </div>

            <div className="mt-6 w-full rounded-xl bg-[#f8f4f3] p-5">

              <p className="text-sm text-[#87565b]">
                Course
              </p>

              <p className="font-semibold text-[#4c1711]">
                {courseTitle}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <div>

                  <p className="text-sm text-[#87565b]">
                    Amount
                  </p>

                  <p className="text-3xl font-bold text-[#4c1711]">
                    ₹{amount}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-[#faf7f6] p-8">

            <h3 className="text-2xl font-bold text-[#4c1711]">
              Payment Instructions
            </h3>

            <ol className="mt-6 space-y-4 text-[#4c1711]">

              <li>
                1. Open any UPI app (Google Pay,
                PhonePe, Paytm, BHIM or your bank app).
              </li>

              <li>
                2. Scan the QR code.
              </li>

              <li>
                3. Pay exactly{" "}
                <strong>₹{amount}</strong>.
              </li>

              <li>
                4. Save a screenshot of the successful
                payment.
              </li>

              <li>
                5. Submit your payment details using
                the button below.
              </li>

            </ol>

            <Button
              className="mt-8 h-12 w-full bg-[#4c1711] text-base hover:bg-[#5f1d16]"
              onClick={() =>
                window.open(
                    formUrl,
                    "_blank",
                    "noopener,noreferrer"
                )
              }
            >
              Submit Payment Details

              <ExternalLink className="ml-2 h-4 w-4" />

            </Button>

            <div className="mt-8 rounded-xl border border-[#d8c7c9] bg-white p-5">

              <p className="text-sm text-[#87565b]">
                UPI ID
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">

                <span className="flex-1 break-all font-semibold text-[#4c1711]">
                  {UPI_ID}
                </span>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={copyUPI}
                >
                  <Copy className="h-4 w-4" />
                </Button>

              </div>

            </div>

            <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-5">

              <div className="flex gap-3">

                <CircleAlert className="mt-0.5 h-5 w-5 text-amber-600" />

                <div>

                  <h4 className="font-semibold text-amber-900">
                    Payment Notice
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-amber-800">
                    We are currently accepting payments via UPI
                    while our payment gateway verification is
                    being completed.
                    <br />
                    <br />
                    Course access is typically granted within
                    <strong> 15–30 minutes </strong>
                    after successful payment verification during
                    business hours.
                  </p>

                </div>

              </div>

            </div>

            

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
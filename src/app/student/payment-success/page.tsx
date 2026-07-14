import { Suspense } from "react";

import PaymentSuccessClient
  from "./PaymentSuccessClient";

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
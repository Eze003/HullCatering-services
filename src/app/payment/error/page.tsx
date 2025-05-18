"use client";

import PaymentError from "@/components/PaymentError";
import { Suspense } from "react";

export default function PaymentErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentError />
    </Suspense>
  );
}

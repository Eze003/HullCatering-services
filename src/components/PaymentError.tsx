"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PaymentError = () => {
  const params = useSearchParams();

  const errorDetails = {
    error: params?.get("message") || "Unknown error occurred",
    reference: params?.get("code") || "N/A",
    timestamp: new Date().toLocaleString(),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
            <svg
              className="h-10 w-10 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            Payment Processing Error
          </h1>
          <p className="mt-2 text-gray-600">
            We encountered an issue while processing your payment. Please try
            again.
          </p>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Error Details
              </h3>
              <div className="mt-2 text-sm text-yellow-700 space-y-1">
                <p>
                  <span className="font-medium">Error:</span>{" "}
                  {errorDetails.error}
                </p>
                <p>
                  <span className="font-medium">Reference:</span>{" "}
                  {errorDetails.reference}
                </p>
                <p>
                  <span className="font-medium">Time:</span>{" "}
                  {errorDetails.timestamp || "Loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/payment"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Payment Again
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p className="mb-2">
            If the problem persists, please contact our support team at
          </p>
          <p className="font-medium text-gray-900">support@yourcompany.com</p>
          <p className="font-medium text-gray-900 mt-1">+1 (800) 123-4567</p>
          <p className="mt-2">Please include the error reference above.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;

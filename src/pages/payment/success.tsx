import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Payment Successful
        </h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            A confirmation email with your order details has been sent. If you
            have any questions, contact us at{" "}
            <span className="font-medium text-gray-800">
              support@yourcompany.com
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

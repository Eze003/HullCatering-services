import Link from "next/link";

const PaymentCancelled = () => {
  const orderDetails = {
    orderId: "12345",
    items: [{ name: "Premium Subscription", quantity: 1, price: 49.99 }],
    total: 49.99,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
            <svg
              className="h-10 w-10 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            Payment Cancelled
          </h1>
          <p className="mt-2 text-gray-600">
            You have cancelled the payment process. Your order has not been
            completed.
          </p>
        </div>

        <div className="mt-6 bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900">
            Order #{orderDetails.orderId}
          </h3>
          <div className="mt-2 space-y-1">
            {orderDetails.items.map((item, index) => (
              <p key={index} className="text-gray-600">
                <span className="font-medium">
                  {item.quantity} x {item.name}
                </span>
              </p>
            ))}
          </div>
          <p className="mt-2 font-medium text-gray-900">
            Total: ${orderDetails.total.toFixed(2)}
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">
            If this was a mistake, you can try again:
          </p>
          <Link
            href="/checkout"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Checkout
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            or{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-500">
              continue shopping
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;

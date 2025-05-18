"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface PaypalButtonProps {
  amount: number;
  onSuccess: (details: any) => void;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  const { items } = useCart();
  const router = useRouter();
  const createOrder = async (
    data: Record<string, unknown>,
    actions: any
  ): Promise<string> => {
    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, total: amount }),
      });

      const order = await response.json();
      console.log({ order });

      if (!response.ok || !order.id) {
        throw new Error("Failed to create PayPal order");
      }

      return order.id;
    } catch (error) {
      console.error("Error creating PayPal order:", error);
      throw error;
    }
  };

  const onApprove = async (
    data: { orderID: string },
    actions: any
  ): Promise<void> => {
    try {
      const response = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      const orderData = await response.json();
      console.log({ approve: orderData });
      if (!response.ok || orderData.status !== "COMPLETED") {
        throw new Error("PayPal payment not completed");
      }

      onSuccess(orderData);
    } catch (error) {
      console.error("Error capturing PayPal payment:", error);
      throw error;
    }
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{
          layout: "horizontal",
          color: "gold",
          shape: "rect",
          label: "pay",
        }}
        onCancel={(err) => {
          console.error("PayPal Cancelled:", err);
          router.push("/payment/cancelled");
        }}
        onError={(err) => {
          console.error("PayPal Error:", err);

          const errorMessage = encodeURIComponent(
            typeof err === "object" &&
              err !== null &&
              "message" in err &&
              typeof (err as any).message === "string"
              ? (err as { message: string }).message
              : String(err)
          );

          const errorCode = encodeURIComponent("ERR_PAYPAL_FAILURE");

          router.push(
            `/payment/error?message=${errorMessage}&code=${errorCode}`
          );
        }}
      />
    </div>
  );
};

export default PaypalButton;

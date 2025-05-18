"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "ASvsybypINh7M5S7EUHlFSX6RX-P18TvDiCsgbWh18w3cBIYK0oYv8Wt_kFeJ5ISKs7wRdqm0J9jmMlD",
        currency: "USD",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}

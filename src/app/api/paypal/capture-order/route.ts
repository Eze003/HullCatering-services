import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { orderID } = await request.json();

    const auth = Buffer.from(
      `ASvsybypINh7M5S7EUHlFSX6RX-P18TvDiCsgbWh18w3cBIYK0oYv8Wt_kFeJ5ISKs7wRdqm0J9jmMlD:ELZzWyYxm00AUrvgLKR_MPwY_D6Zmcsmk6Wk0pyYKF425kwKHVX0V_h5klgSc6873CmUL61MsfAr3GVG`
    ).toString("base64");

    const tokenRes = await fetch(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      }
    );

    const tokenData = await tokenRes.json();

    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error capturing PayPal payment:", error);
    return NextResponse.json(
      { error: "Failed to capture PayPal payment" },
      { status: 500 }
    );
  }
}

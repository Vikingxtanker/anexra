declare module "@cashfreepayments/cashfree-js" {
  export interface CheckoutOptions {
    paymentSessionId: string;
    redirectTarget?: "_self" | "_blank" | "_modal";
  }

  export interface Cashfree {
    checkout(options: CheckoutOptions): Promise<any>;
  }

  export function load(options: {
    mode: "sandbox" | "production";
  }): Promise<Cashfree>;
}
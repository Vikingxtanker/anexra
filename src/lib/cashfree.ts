import {
  Cashfree,
  CFEnvironment,
} from "cashfree-pg";

const isProduction =
  process.env.CASHFREE_ENV ===
  "production";

const clientId = isProduction
  ? process.env
      .CASHFREE_PRODUCTION_CLIENT_ID
  : process.env
      .CASHFREE_SANDBOX_CLIENT_ID;

const clientSecret =
  isProduction
    ? process.env
        .CASHFREE_PRODUCTION_SECRET_KEY
    : process.env
        .CASHFREE_SANDBOX_SECRET_KEY;

if (!clientId || !clientSecret) {
  throw new Error(
    `Missing Cashfree ${
      isProduction
        ? "Production"
        : "Sandbox"
    } credentials.`
  );
}

const cashfree =
  new Cashfree(
    isProduction
      ? CFEnvironment.PRODUCTION
      : CFEnvironment.SANDBOX,
    clientId,
    clientSecret
  );

export default cashfree;
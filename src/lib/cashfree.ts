import { Cashfree, CFEnvironment } from "cashfree-pg";

const clientId = process.env.CASHFREE_APP_ID;
const clientSecret = process.env.CASHFREE_SECRET_KEY;

if (!clientId) {
  throw new Error(
    "Missing CASHFREE_APP_ID environment variable."
  );
}

if (!clientSecret) {
  throw new Error(
    "Missing CASHFREE_SECRET_KEY environment variable."
  );
}

const cashfree = new Cashfree(
  process.env.CASHFREE_ENV === "production"
    ? CFEnvironment.PRODUCTION
    : CFEnvironment.SANDBOX,
  clientId,
  clientSecret
);

export default cashfree;
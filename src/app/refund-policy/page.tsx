import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Anexra",
  description:
    "Learn about Anexra's refund, cancellation, and replacement policy for products and services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b">
        <div className="container mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Refund Policy
          </h1>

          <p className="mt-6 max-w-3xl text-muted-foreground leading-8">
            This Refund Policy explains the conditions under which
            cancellations, refunds, and replacements may be requested for
            products or services purchased through the Anexra platform.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last Updated: June 2026
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Cancellation Requests
          </h2>

          <p className="leading-8 text-muted-foreground">
            Cancellation requests will only be considered if submitted within
            <strong> 2 days </strong>
            of placing the order.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            Once an order has been processed, dispatched, or communicated to
            the respective seller, merchant, or service provider, cancellation
            requests may no longer be accepted. If the order is already out for
            delivery, you may choose to refuse delivery where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Non-Cancellable Products
          </h2>

          <p className="leading-8 text-muted-foreground">
            Certain categories of products or services may not be eligible for
            cancellation due to their nature. However, where applicable, a
            replacement or refund may be considered if the delivered product is
            found to be defective, damaged, or not of acceptable quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Damaged or Defective Products
          </h2>

          <p className="leading-8 text-muted-foreground">
            If you receive a damaged or defective product, you should notify our
            customer support within
            <strong> 2 days </strong>
            of receiving the order.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            Requests will be reviewed after verification by the respective
            seller or merchant. Refunds or replacements will be processed only
            after confirmation that the product is defective or damaged.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Incorrect or Unsatisfactory Products
          </h2>

          <p className="leading-8 text-muted-foreground">
            If the delivered product differs significantly from its description
            or does not meet your reasonable expectations, please contact our
            customer support within
            <strong> 2 days </strong>
            of delivery.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            After reviewing the complaint, Anexra or the respective seller will
            determine the appropriate resolution, which may include a refund,
            replacement, or other suitable remedy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Manufacturer Warranty
          </h2>

          <p className="leading-8 text-muted-foreground">
            For products covered under a manufacturer's warranty, customers are
            requested to contact the manufacturer directly for warranty-related
            claims and support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Refund Processing
          </h2>

          <p className="leading-8 text-muted-foreground">
            Once a refund request has been reviewed and approved, the refund
            will generally be processed within
            <strong> 2 business days </strong>
            using the original payment method, unless otherwise communicated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Need Assistance?
          </h2>

          <p className="leading-8 text-muted-foreground">
            If you have any questions regarding cancellations, refunds, or
            replacements, please contact us using the contact details available
            on the Anexra website. Our support team will be happy to assist you.
          </p>
        </section>
      </section>
    </main>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Policy | Anexra",
  description:
    "Learn about Anexra's return, exchange, and replacement policy for eligible products and services.",
};

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b">
        <div className="container mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Return Policy
          </h1>

          <p className="mt-6 max-w-3xl text-muted-foreground leading-8">
            This Return Policy explains the eligibility, process, and conditions
            for returning, exchanging, or replacing products purchased through
            the Anexra platform.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last Updated: June 2026
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 space-y-12">

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Return Eligibility
          </h2>

          <p className="leading-8 text-muted-foreground">
            Eligible products may be returned or exchanged within
            <strong> 2 days </strong>
            from the date of purchase.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            Requests received after this period may not qualify for a return,
            exchange, or refund unless otherwise required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Conditions for Returns
          </h2>

          <p className="leading-8 text-muted-foreground">
            To be eligible for a return or exchange, the product must:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground leading-8">
            <li>Be unused and in its original condition.</li>
            <li>Be returned with the original packaging.</li>
            <li>Include all accessories, manuals, and accompanying materials where applicable.</li>
          </ul>

          <p className="mt-6 leading-8 text-muted-foreground">
            Products purchased during promotional offers or sale events may not
            be eligible for return or exchange unless specifically stated
            otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Non-Returnable Products
          </h2>

          <p className="leading-8 text-muted-foreground">
            Certain categories of products or services may be excluded from
            returns or refunds. Such exclusions, if applicable, will be clearly
            communicated at the time of purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Exchange Policy
          </h2>

          <p className="leading-8 text-muted-foreground">
            Products may be eligible for replacement or exchange if they are
            found to be defective or damaged after inspection and verification.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            Exchange requests are subject to product availability and successful
            quality assessment by Anexra or the respective seller.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Inspection Process
          </h2>

          <p className="leading-8 text-muted-foreground">
            Once a returned product is received, it will undergo an inspection
            to verify its condition and eligibility for return or exchange.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            You will be notified once the inspection has been completed and a
            decision regarding your request has been made.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Approval of Returns
          </h2>

          <p className="leading-8 text-muted-foreground">
            If the returned item successfully passes our quality verification,
            your return, exchange, or replacement request will be processed in
            accordance with this policy and any applicable service terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Need Assistance?
          </h2>

          <p className="leading-8 text-muted-foreground">
            If you have any questions regarding returns, exchanges, or product
            eligibility, please contact us using the contact information
            available on the Anexra website. Our support team will be happy to
            assist you throughout the return process.
          </p>
        </section>

      </section>
    </main>
  );
}
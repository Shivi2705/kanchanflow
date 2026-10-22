import type { Metadata } from "next";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { FaqList } from "@/components/ui/FaqList";
import { pricingFaqs } from "@/lib/pricing";

const description = "Illustrative Starter, Growth and Scale plans for KanchanFlow, with monthly and annual billing views.";
export const metadata: Metadata = { title: "Pricing", description, openGraph: { title: "KanchanFlow Pricing", description } };

export default function Pricing() {
  return (
    <>
      <section className="hero" aria-labelledby="p-h"><div className="wrap">
        <p className="mono" style={{ color: "var(--gold)" }}>Doc KF-003 · Pricing</p>
        <h1 id="p-h">Plans sized to your shop.</h1>
        <p className="lead">Illustrative assignment pricing in INR. Not a real offer, and there is no checkout.</p>
      </div></section>
      <section className="sec light" aria-label="Plans"><div className="wrap"><PricingPlans /></div></section>
      <section id="pricing-faq" className="sec light" aria-labelledby="pf-h" style={{ paddingTop: 0 }}><div className="wrap"><h2 id="pf-h" style={{ marginBottom: "1rem" }}>Pricing FAQ</h2><FaqList items={pricingFaqs} /></div></section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoButton } from "@/components/demo/DemoButton";
import { Mockup } from "@/components/home/Mockup";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { faqs, features, industries, problems, workflow } from "@/lib/content";
import { inr } from "@/lib/utils";
import { plans } from "@/lib/pricing";

const title = "Manufacturing CRM for quotes, BOMs and work orders";
const description = "KanchanFlow brings quotations, bills of materials, follow-ups and work orders into one manufacturing workflow.";
export const metadata: Metadata = { title: { absolute: `KanchanFlow — ${title}` }, description, openGraph: { title, description } };

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap hero-grid">
          <div>
            <p className="mono" style={{ color: "var(--gold)" }}>Manufacturing CRM · Doc KF-001</p>
            <h1 id="hero-h">From first enquiry to <em>shop-floor</em> ready.</h1>
            <p className="lead">Bring quotations, bills of materials, customer follow-ups, and work orders into one clear manufacturing workflow.</p>
            <div className="row"><DemoButton /><Link className="btn ghost" href="/features">Explore features</Link></div>
          </div>
          <Mockup />
        </div>
      </section>
      <Section num="01" title="From scattered files to one connected workflow" intro="Typical shop-floor sales paperwork, and what changes when it lives in one place.">
        <div className="grid3">{problems.map(([t, d]) => <div className="tile" key={t}><h3>{t}</h3><p className="sub">{d}</p></div>)}</div>
        <p style={{ marginTop: "1.5rem", fontWeight: 600 }}>KanchanFlow keeps the drawing, BOM, quotation versions and next follow-up on one record.</p>
      </Section>
      <Section num="02" tone="dark" title="Built around how jobs are quoted" intro="Illustrative product capabilities. Not verified integrations.">
        <div className="grid3">{features.map((f) => <div className="tile" key={f.id}><f.icon aria-hidden="true" /><h3>{f.title}</h3><p className="sub">{f.short}</p></div>)}</div>
      </Section>
      <Section num="03" title="One path from enquiry to work order">
        <ol className="steps">{workflow.map(([t, d], i) => <li key={t}><span className="mono">Step {i + 1}</span><b>{t}</b><span className="sub">{d}</span></li>)}</ol>
      </Section>
      <Section id="industries" num="04" title="Made for job-based manufacturers">
        <ul className="ind">{industries.map((i) => <li key={i}>{i}</li>)}</ul>
      </Section>
      <Section num="05" tone="dark" title="Illustrative plans" intro="Sample pricing for assignment purposes.">
        <div className="grid3">{plans.map((p) => <div className="tile" key={p.id}><h3>{p.name}</h3><p className="price">{inr(p.monthly)}<span className="mono"> / month</span></p><p className="sub">{p.blurb}</p></div>)}</div>
        <p style={{ marginTop: "1.5rem" }}><Link className="btn" href="/pricing">Compare plans <ArrowRight size={18} aria-hidden="true" /></Link></p>
      </Section>
      <Section id="faq" num="06" title="Questions manufacturers ask"><FaqList items={faqs} /></Section>
      <section className="sec dark cta" aria-labelledby="cta-h"><div className="wrap"><h2 id="cta-h">Give every enquiry a clear next step.</h2><div><DemoButton /></div></div></section>
    </>
  );
}

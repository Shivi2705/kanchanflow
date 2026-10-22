"use client";
import { useState } from "react";
import { DemoButton } from "@/components/demo/DemoButton";
import { plans, price, ANNUAL_DISCOUNT } from "@/lib/pricing";
import { inr } from "@/lib/utils";

export function PricingPlans() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <div className="toggle" role="group" aria-label="Billing period">
        <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>Monthly</button>
        <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>Annual · save {ANNUAL_DISCOUNT * 100}%</button>
      </div>
      <div className="grid3" aria-live="polite">
        {plans.map((p) => {
          const x = price(p, annual);
          return (
            <section key={p.id} className={`tile plan${p.featured ? " feat" : ""}`} aria-labelledby={`${p.id}-p`}>
              {p.featured && <span className="mono badge">Highlighted plan</span>}
              <h2 id={`${p.id}-p`} style={{ fontSize: "2rem" }}>{p.name}</h2>
              <p className="sub">{p.blurb}</p>
              <p className="price">{inr(x.monthlyEquivalent)}<span className="mono"> / month{annual ? " equivalent" : ""}</span></p>
              <p className="sub">{annual ? `Billed ${inr(x.billedAnnually)} once a year. You save ${inr(x.saving)} versus monthly.` : "Billed monthly."}</p>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <DemoButton plan={p.id} className={p.featured ? "btn" : "btn ghost"}>{`Book a demo for ${p.name}`}</DemoButton>
            </section>
          );
        })}
      </div>
    </>
  );
}

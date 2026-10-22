import type { Metadata } from "next";
import { DemoButton } from "@/components/demo/DemoButton";
import { comparison, features } from "@/lib/content";

const description = "Quotations, BOMs, pipelines, follow-ups, reports and mobile access in one manufacturing CRM workflow.";
export const metadata: Metadata = { title: "Features", description, openGraph: { title: "KanchanFlow Features", description } };

export default function Features() {
  return (
    <>
      <section className="hero" aria-labelledby="f-h"><div className="wrap">
        <p className="mono" style={{ color: "var(--gold)" }}>Doc KF-002 · Features</p>
        <h1 id="f-h">Every step of the job, on one record.</h1>
        <p className="lead">Illustrative capabilities covering quotations, BOMs, pipelines, follow-ups, reports and mobile access.</p>
      </div></section>
      <section className="sec light" aria-labelledby="rows-h"><div className="wrap">
        <h2 id="rows-h" className="sr-only">Feature details</h2>
        {features.map((f) => (
          <article className="frow" key={f.id} aria-labelledby={`${f.id}-h`}>
            <div>
              <f.icon aria-hidden="true" color="#8A5E00" />
              <h3 id={`${f.id}-h`}>{f.title}</h3>
              <p className="sub" style={{ marginTop: ".5rem" }}>{f.short}</p>
              <p style={{ marginTop: ".75rem", fontWeight: 600 }}>{f.outcome}</p>
              <ul>{f.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="fdoc" role="group" aria-label={`Sample ${f.title} preview`}>
              <p className="mono" style={{ color: "var(--gold)" }}>{f.doc} · sample data</p>
              <dl>{f.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            </div>
          </article>
        ))}
      </div></section>
      <section className="sec light" aria-labelledby="cmp-h" style={{ paddingTop: 0 }}><div className="wrap">
        <h2 id="cmp-h" style={{ marginBottom: "1.5rem" }}>Disconnected tools vs a connected workflow</h2>
        <div className="scroll" role="region" aria-label="Comparison table, scrollable" tabIndex={0}>
          <table>
            <caption className="sr-only">Comparison of disconnected tools and a connected manufacturing workflow</caption>
            <thead><tr><th scope="col">Area</th><th scope="col">Disconnected tools</th><th scope="col">A connected manufacturing workflow</th></tr></thead>
            <tbody>{comparison.map(([a, b, c]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>)}</tbody>
          </table>
        </div>
      </div></section>
      <section className="sec dark cta" aria-labelledby="fc-h"><div className="wrap"><h2 id="fc-h">See it with your own quotation in mind.</h2><div><DemoButton /></div></div></section>
    </>
  );
}

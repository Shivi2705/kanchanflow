const stages = [
  { name: "Enquiry", cards: [["QTN-1045", "Shah Fabricators", "₹1,25,000", "Drawing awaited"]] },
  { name: "Quoted", cards: [["QTN-1042", "Ravi Precision Works", "₹4,82,000", "Follow up 22 Oct"]] },
  { name: "Negotiation", cards: [["QTN-1038", "Patel Switchgear", "₹2,90,500", "Revised terms"]] },
  { name: "Order Confirmed", cards: [["QTN-1031", "Desai Pumps", "₹6,40,000", "WO-2207 ready"]] },
];
export function Mockup() {
  return (
    <figure className="mock" aria-label="Sample sales pipeline with fictional data" style={{ margin: 0 }}>
      <div className="mock-top"><span className="mono" style={{ color: "var(--gold)" }}>Pipeline · Oct 2026</span><span className="mono" style={{ color: "var(--muted-dk)" }}>Interactive product preview · sample data</span></div>
      <div className="cols">
        {stages.map((s) => (
          <div className="col" key={s.name}><h4>{s.name}</h4>
            {s.cards.map(([id, who, val, st]) => <div className="card" key={id}><span className="mono">{id}</span><b>{who}</b><span>{val}</span><small>{st}</small></div>)}
          </div>
        ))}
      </div>
      <div className="panel"><span className="mono" style={{ color: "var(--gold)" }}>QTN-1042 · v3 · BOM-0317</span><b>Ravi Precision Works · Bracket assembly</b><small style={{ color: "var(--muted-dk)" }}>12 line items · valid until 14 Nov 2026 · owner Meera S.</small></div>
    </figure>
  );
}

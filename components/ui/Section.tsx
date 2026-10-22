export function Section({ id, num, title, intro, tone = "light", children }: { id?: string; num: string; title: string; intro?: string; tone?: "light" | "dark"; children: React.ReactNode }) {
  return (
    <section id={id} className={`sec ${tone}`} aria-labelledby={`${id ?? num}-h`}>
      <div className="wrap">
        <div className="sec-head">
          <p className="mono num">Section {num}</p>
          <h2 id={`${id ?? num}-h`}>{title}</h2>
          {intro && <p className="sub">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

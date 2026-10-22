"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent } from "react";
import { plans } from "@/lib/pricing";

const Ctx = createContext<(plan?: string) => void>(() => {});
export const useDemo = () => useContext(Ctx);

const industries = ["Fabrication", "Machining", "Industrial equipment", "Electrical assemblies", "Component manufacturing", "Other"];
const sizes = ["1–10", "11–50", "51–200", "200+"];
type Errors = Partial<Record<"name" | "email" | "company" | "industry" | "size", string>>;

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [plan, setPlan] = useState("");
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formKey, setFormKey] = useState(0);

  const open = useCallback((p?: string) => {
    setPlan(p ?? ""); setDone(false); setErrors({}); setFormKey((k) => k + 1);
    ref.current?.showModal();
  }, []);

  useEffect(() => {
    const d = ref.current;
    const onClick = (e: MouseEvent) => { if (e.target === d) d?.close(); };
    d?.addEventListener("click", onClick);
    return () => d?.removeEventListener("click", onClick);
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget, data = new FormData(f), v = (n: string) => String(data.get(n) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Enter your full name.";
    if (!v("email")) next.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter an email like name@company.com.";
    if (!v("company")) next.company = "Enter your company name.";
    if (!v("industry")) next.industry = "Choose your industry.";
    if (!v("size")) next.size = "Choose your team size.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) (f.elements.namedItem(first) as HTMLElement | null)?.focus();
    else setDone(true);
  }

  const field = (id: keyof Errors, label: string, el: React.ReactNode) => (
    <div className="field">
      <label htmlFor={`f-${id}`}>{label} <span className="req" aria-hidden="true">*</span><span className="sr-only"> (required)</span></label>
      {el}
      {errors[id] && <p className="err" id={`e-${id}`}>{errors[id]}</p>}
    </div>
  );
  const a = (id: keyof Errors) => ({ id: `f-${id}`, name: id, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `e-${id}` : undefined, "aria-required": true as const });

  return (
    <Ctx.Provider value={open}>
      {children}
      <dialog ref={ref} aria-labelledby="demo-title">
        <div className="dlg">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "start" }}>
            <h2 id="demo-title" style={{ fontSize: "2rem" }}>Book a demo</h2>
            <button className="btn ghost" type="button" onClick={() => ref.current?.close()}>Close</button>
          </div>
          {done ? (
            <div className="ok" role="status">
              <p>Demo request preview complete. This assignment form does not send or store your information.</p>
              <button className="btn" style={{ marginTop: "1rem" }} type="button" onClick={() => ref.current?.close()}>Done</button>
            </div>
          ) : (
            <form key={formKey} onSubmit={submit} noValidate style={{ display: "grid", gap: "1rem" }}>
              <p className="mono" style={{ color: "var(--muted)" }}>Preview only · nothing is sent or stored · * required</p>
              {field("name", "Full name", <input {...a("name")} autoComplete="name" />)}
              {field("email", "Work email", <input {...a("email")} type="email" autoComplete="email" />)}
              {field("company", "Company name", <input {...a("company")} autoComplete="organization" />)}
              {field("industry", "Industry", <select {...a("industry")} defaultValue=""><option value="" disabled>Select industry</option>{industries.map((i) => <option key={i}>{i}</option>)}</select>)}
              {field("size", "Team size", <select {...a("size")} defaultValue=""><option value="" disabled>Select team size</option>{sizes.map((i) => <option key={i}>{i}</option>)}</select>)}
              <div className="field"><label htmlFor="f-plan">Plan of interest (optional)</label>
                <select id="f-plan" name="plan" value={plan} onChange={(e) => setPlan(e.target.value)}><option value="">Not sure yet</option>{plans.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
              <div className="field"><label htmlFor="f-msg">Message (optional)</label><textarea id="f-msg" name="message" rows={3} /></div>
              <button className="btn" type="submit">Preview demo request</button>
            </form>
          )}
        </div>
      </dialog>
    </Ctx.Provider>
  );
}

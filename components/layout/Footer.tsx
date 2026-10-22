import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div><p className="brand"><Logo />KanchanFlow</p><p style={{ marginTop: ".75rem" }}>A manufacturing CRM concept for quotations, BOMs, pipelines and work orders.</p></div>
          <nav aria-label="Product"><h2>Product</h2><ul><li><Link href="/features">Features</Link></li><li><Link href="/pricing">Pricing</Link></li><li><Link href="/#industries">Industries</Link></li></ul></nav>
          <nav aria-label="Company"><h2>Company</h2><ul><li><Link href="/">Home</Link></li><li><Link href="/#faq">FAQ</Link></li><li><Link href="/pricing#pricing-faq">Pricing FAQ</Link></li></ul></nav>
        </div>
        <p className="mono" style={{ marginTop: "2rem", color: "var(--muted-dk)" }}>© 2026 KanchanFlow · Student assignment project, not a real product · Every job gets a traveller.</p>
      </div>
    </footer>
  );
}

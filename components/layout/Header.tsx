"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { DemoButton } from "@/components/demo/DemoButton";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!open) return;
    list.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const cur = (href: string) => (href === path ? "page" : undefined);
  return (
    <header className="hdr">
      <div className="wrap">
        <Link href="/" className="brand"><Logo />KanchanFlow</Link>
        <nav aria-label="Main">
          <ul className="links">{nav.map((n) => <li key={n.label}><Link href={n.href} aria-current={cur(n.href)}>{n.label}</Link></li>)}</ul>
        </nav>
        <DemoButton className="btn hdr-cta" />
        <button ref={btn} className="menu-btn" aria-label="Main menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile">
          <ul ref={list} className="mlinks">
            {nav.map((n) => <li key={n.label}><Link href={n.href} aria-current={cur(n.href)} onClick={() => setOpen(false)}>{n.label}</Link></li>)}
            <li><DemoButton className="btn">Book a demo</DemoButton></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

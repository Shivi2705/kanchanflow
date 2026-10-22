"use client";
import { useDemo } from "./DemoProvider";
export function DemoButton({ children = "Book a demo", plan, className = "btn" }: { children?: React.ReactNode; plan?: string; className?: string }) {
  const open = useDemo();
  return <button type="button" className={className} onClick={() => open(plan)}>{children}</button>;
}

export type Plan = {
  id: "starter" | "growth" | "scale";
  name: string;
  monthly: number; // illustrative INR per workspace per month
  blurb: string;
  features: string[];
  featured?: boolean;
};
export const ANNUAL_DISCOUNT = 0.2;
export const plans: Plan[] = [
  { id: "starter", name: "Starter", monthly: 2499, blurb: "For small shops moving quotations out of spreadsheets.", features: ["Up to 5 users", "Quotations with version history", "Basic pipeline", "Customer follow-up reminders", "Email support"] },
  { id: "growth", name: "Growth", monthly: 5999, featured: true, blurb: "For teams that quote, follow up and hand over daily.", features: ["Up to 25 users", "Bill of materials on every quote", "Work-order handover", "WhatsApp follow-up templates", "Standard reports"] },
  { id: "scale", name: "Scale", monthly: 12999, blurb: "For multi-site manufacturers with several sales teams.", features: ["Up to 100 users", "Multiple pipelines and sites", "Custom report views", "Role-based permissions", "Priority onboarding"] },
];
export function price(plan: Plan, annual: boolean) {
  const monthlyEquivalent = annual ? Math.round(plan.monthly * (1 - ANNUAL_DISCOUNT)) : plan.monthly;
  const billedAnnually = monthlyEquivalent * 12;
  return { monthlyEquivalent, billedAnnually, saving: plan.monthly * 12 - billedAnnually };
}
export const pricingFaqs = [
  { q: "Are these prices final?", a: "No. Plans, limits and prices on this site are illustrative assignment content and are not a real offer." },
  { q: "How does annual billing work here?", a: "The annual view shows a monthly-equivalent price with 20% off. The amount billed once a year is shown separately underneath." },
  { q: "Can I pay from this page?", a: "No. There is no checkout. Each plan button opens a demo-request preview form that does not send or store anything." },
  { q: "What counts as a user?", a: "In this sample, a user is anyone with a login, such as sales, estimating or planning staff." },
];

import { Boxes, BarChart3, Columns3, FileText, MessageCircle, Smartphone, type LucideIcon } from "lucide-react";

export const nav = [
  { label: "Home", href: "/" }, { label: "Features", href: "/features" }, { label: "Industries", href: "/#industries" },
  { label: "Pricing", href: "/pricing" }, { label: "FAQ", href: "/#faq" },
];
export type Feature = { id: string; title: string; icon: LucideIcon; short: string; outcome: string; points: string[]; doc: string; rows: [string, string][] };
export const features: Feature[] = [
  { id: "quote", title: "Quote-to-order", icon: FileText, short: "Revise quotations without losing earlier versions, then convert the accepted one into an order.", outcome: "Sales and planning work from the same accepted quotation instead of a retyped copy.", points: ["Numbered versions per enquiry", "Validity dates and payment terms", "One-step conversion to order"], doc: "QTN-1042 · v3", rows: [["Customer", "Ravi Precision Works"], ["Validity", "14 Nov 2026"], ["Status", "Sent"], ["Total", "₹4,82,000"]] },
  { id: "bom", title: "Bill of materials (BOM)", icon: Boxes, short: "Attach materials, processes and quantities to a quotation so costing is visible before you commit.", outcome: "Planners can see what an order needs at the moment it is confirmed.", points: ["Nested assemblies and sub-parts", "Material and process lines", "BOM carried into the work order"], doc: "BOM-0317 · rev B", rows: [["MS plate 10 mm", "12 pcs"], ["Laser cutting", "2.5 hrs"], ["Powder coat", "12 pcs"], ["M10 fasteners", "48 pcs"]] },
  { id: "pipeline", title: "Sales pipeline", icon: Columns3, short: "Move enquiries through Enquiry, Quoted, Negotiation and Order Confirmed with an owner on every card.", outcome: "Every open enquiry shows who owns it and when it was last touched.", points: ["Stage columns with owners", "Next follow-up date on each card", "Filter by customer or salesperson"], doc: "PIPE · Oct 2026", rows: [["Enquiry", "6 cards"], ["Quoted", "9 cards"], ["Negotiation", "4 cards"], ["Order Confirmed", "3 cards"]] },
  { id: "whatsapp", title: "WhatsApp follow-ups", icon: MessageCircle, short: "Prepare follow-up messages from quotation details and log what was sent.", outcome: "Follow-up history stays with the quotation, not in a personal phone.", points: ["Message templates by stage", "Follow-up log on the quotation", "Illustrative capability, no live integration"], doc: "FUP-2208", rows: [["Due", "22 Oct, 11:00"], ["Owner", "Meera S."], ["Template", "Quote reminder"], ["Logged", "Pending"]] },
  { id: "reports", title: "Reports", icon: BarChart3, short: "Review quotation status, pipeline value and follow-up gaps in plain tables.", outcome: "Weekly sales reviews start from the same data the team already updates.", points: ["Pipeline value by stage", "Overdue follow-ups", "Quotations by customer"], doc: "RPT-WK42", rows: [["Open quotes", "13"], ["Overdue follow-ups", "2"], ["Awaiting reply", "7"], ["Sample data", "Illustrative"]] },
  { id: "mobile", title: "Mobile app", icon: Smartphone, short: "Check a quotation, log a call or confirm a work order from the shop floor or a customer visit.", outcome: "Updates are recorded where the conversation happens.", points: ["Quotation and customer lookup", "Quick call and visit notes", "Illustrative capability"], doc: "MOB · QTN-1042", rows: [["Customer", "Ravi Precision"], ["Next step", "Call Thu"], ["Note", "Needs rev C drawing"], ["Sync", "Sample"]] },
];
export const problems = [
  ["Scattered spreadsheets", "A fabrication enquiry lives in one sheet, its drawing revisions in a shared folder, and its price in someone's inbox."],
  ["Separate quotation documents", "Version 3 of a quote is emailed while planning still works from version 1."],
  ["Missed follow-ups", "A quoted machining job goes quiet because nobody owned the next call."],
];
export const workflow = [["Enquiry", "Capture drawing, quantity and deadline."], ["Quotation", "Price with BOM and versions."], ["Follow-up", "Assign owner and date."], ["Confirmed order", "Lock the accepted version."], ["Work order", "Hand over to production."]];
export const industries = ["Fabrication", "Machining", "Industrial equipment", "Electrical assemblies", "Component manufacturing"];
export const faqs = [
  { q: "Does KanchanFlow replace our ERP or accounts software?", a: "It is shown here as a CRM for the sales-to-handover stage: enquiries, quotations, BOMs, follow-ups and work orders. Accounts and inventory are out of scope in this sample." },
  { q: "Can we quote jobs that need a BOM?", a: "Yes. A quotation can carry material, process and fastener lines, and the same BOM follows the order into the work order." },
  { q: "How are quotation revisions handled?", a: "Each revision is a numbered version of the same quotation, so earlier prices stay available for reference." },
  { q: "Is WhatsApp integration live?", a: "No. WhatsApp follow-ups are an illustrative capability on this marketing site. No messaging service is connected." },
  { q: "Does the demo form send my details?", a: "No. It is a frontend-only preview and does not send or store anything." },
];
export const comparison = [
  ["Quotation versions", "Copies named final_v2_new.xlsx", "Numbered versions on one record"],
  ["Follow-up ownership", "Depends on who remembers", "Owner and due date on every enquiry"],
  ["BOM visibility", "Separate sheet, often out of date", "BOM attached to the quotation"],
  ["Order handover", "Retyped for planning", "Accepted version becomes the work order"],
];

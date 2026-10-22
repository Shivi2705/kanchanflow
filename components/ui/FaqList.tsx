export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return <div>{items.map((i) => <details key={i.q}><summary>{i.q}</summary><p>{i.a}</p></details>)}</div>;
}

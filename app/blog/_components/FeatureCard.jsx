export default function FeatureCard({ title, children }) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-3 text-sm leading-6 text-slate-200/90">{children}</div>
    </div>
  );
}

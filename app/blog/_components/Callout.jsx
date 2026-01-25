export default function Callout({ type = "info", title, children }) {
  const styles =
    type === "warning"
      ? "border-amber-400/20 bg-amber-400/10 text-amber-50"
      : type === "success"
        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-50"
        : "border-cyan-400/20 bg-cyan-400/10 text-cyan-50";

  const label =
    title ||
    (type === "warning" ? "Warning" : type === "success" ? "Success" : "Info");

  return (
    <div className={`not-prose my-7 rounded-2xl border p-5 ${styles}`}>
      <div className="text-sm font-semibold">{label}</div>
      <div className="mt-2 text-sm leading-6 opacity-90">{children}</div>
    </div>
  );
}

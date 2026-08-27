/**
 * Signature motif: fine ledger rules with aligned columns.
 * Used sparingly — hero backdrop and section dividers.
 */
export function LedgerBackdrop({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="ledger-lines absolute inset-0 opacity-70" />
      <div className="ledger-columns absolute inset-y-0 right-0 w-[42%] opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export function RuleDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-accent" />
      {label && <span className="eyebrow">{label}</span>}
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}

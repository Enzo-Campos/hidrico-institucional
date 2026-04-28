import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
  variant?: "dark" | "light";
  className?: string;
}

export default function Breadcrumb({ crumbs, variant = "dark", className = "" }: Props) {
  const linkColor   = variant === "dark" ? "#6b7280" : "#9ca3af";
  const hoverClass  = variant === "dark" ? "hover:text-white" : "hover:text-gray-700";
  const activeColor = "#22c55e";
  const sepColor    = variant === "dark" ? "#374151" : "#d1d5db";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-xs ${className}`}
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronIcon color={sepColor} />
            )}
            {!isLast && crumb.href ? (
              <Link
                href={crumb.href}
                className={`font-medium transition-colors ${hoverClass}`}
                style={{ color: linkColor }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                className="font-semibold"
                style={{ color: isLast ? activeColor : linkColor }}
              >
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

function ChevronIcon({ color }: { color: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const strokeBase: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
};

export function IconShield(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <path d="M12 3l8 3.5v6c0 5-3.6 8.2-8 9.5-4.4-1.3-8-4.5-8-9.5v-6z" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l8 3.5v6c0 5-3.6 8.2-8 9.5-4.4-1.3-8-4.5-8-9.5v-6z" />
      <path d="M9.5 12.5l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function IconShieldAlert(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l8 3.5v6c0 5-3.6 8.2-8 9.5-4.4-1.3-8-4.5-8-9.5v-6z" />
      <path d="M12 9v4M12 16h.01" />
    </svg>
  );
}

export function IconSwap(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 10h13a5 5 0 0 1 0 10h-4" />
      <path d="m7 6-4 4 4 4" />
    </svg>
  );
}

export function IconSwapDouble(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8h16" />
      <path d="m8 4-4 4 4 4" />
      <path d="M20 16H4" />
      <path d="m16 12 4 4-4 4" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconBars(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" {...props}>
      <path d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4" />
    </svg>
  );
}

export function IconBooks(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <path d="M4 5h7v15H4zM13 5h7v15h-7z" />
    </svg>
  );
}

export function IconGlossary(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <path d="M4 5h7v15H4zM13 5h7v15h-7z" />
      <path d="M7 9h1M16 9h1" />
    </svg>
  );
}

export function IconPages(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <path d="M5 4h14v16H5z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function IconClaimDoc(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 4h9l5 5v11H5z" />
      <path d="M14 4v5h5" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props} className={`moon ${props.className ?? ""}`.trim()}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" {...props} className={`sun ${props.className ?? ""}`.trim()}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  );
}

export function IconArrowsHorizontal(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M10.5 12h3" />
    </svg>
  );
}

export function IconShopifyBag(props: IconProps) {
  return (
    <svg
      {...strokeBase}
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={18}
      height={18}
      aria-hidden="true"
      focusable="false"
      {...props}
      className={`bicon ${props.className ?? ""}`.trim()}
    >
      <path d="M4 8h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z" />
      <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" />
    </svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9.5h4v11H3zM10 9.5h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.3-2.02 2.66v5.14h-4z" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1-5.8 6.1H1.5l7.5-8.6L1.2 3h6.6l4.5 5.6zm-1.1 16h1.8L7.7 4.8H5.8z" />
    </svg>
  );
}

export function IconPackage(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </svg>
  );
}

export function IconEnvelope(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconBoxes(props: IconProps) {
  return (
    <svg {...strokeBase} strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function IconMenu() {
  return <i />;
}

const ICONS = {
  shield: IconShield,
  shieldAlert: IconShieldAlert,
  swap: IconSwap,
  truck: IconTruck,
  check: IconCheck,
  bars: IconBars,
  books: IconBooks,
  glossary: IconGlossary,
  pages: IconPages,
  claimDoc: IconClaimDoc,
};

export function NavIcon({ name, ...props }: { name: keyof typeof ICONS } & IconProps) {
  const Component = ICONS[name];
  return <Component {...props} />;
}

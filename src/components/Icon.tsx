import type { SVGProps } from "react";

export type IconName =
  | "flask"
  | "plane"
  | "health"
  | "code"
  | "book"
  | "building"
  | "mail"
  | "lock"
  | "globe"
  | "arrow-up-right"
  | "arrow-right"
  | "menu"
  | "close"
  | "check"
  | "chevron-down"
  | "clock"
  | "sparkles";

const PATHS: Record<IconName, React.ReactNode> = {
  flask: <><path d="M9 3h6" /><path d="M10 3v6.2l-5.4 8.7A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-3.1L14 9.2V3" /><path d="M8 14h8" /><path d="M9 17h.01M15 16h.01" /></>,
  plane: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  health: <><path d="M12 8v8M8 12h8" /><path d="M20.5 13.5a5 5 0 0 0-7-7L12 8l-1.5-1.5a5 5 0 0 0-7 7L12 22Z" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  building: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 21V9h6v12M8 7h.01M12 7h.01M16 7h.01M8 12h.01M16 12h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
  "arrow-up-right": <><path d="M7 17 17 7M7 7h10v10" /></>,
  "arrow-right": <><path d="M5 12h14M12 5l7 7-7 7" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1L19 14Z" /></>,
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.65"
      viewBox="0 0 24 24"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}

import type { ReactNode } from "react";

/**
 * Centers content with a consistent max-width and horizontal padding.
 * Sections keep their own background full-bleed; wrap only the inner
 * content with <Container>.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full container px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

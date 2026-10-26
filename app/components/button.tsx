import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "solid" | "outline" | "text"; className?: string } & Omit<ComponentProps<typeof Link>, "href" | "children">;

export function Button({ href, children, variant = "solid", className = "", ...props }: Props) {
  return <Link href={href} className={`button button--${variant} ${className}`} {...props}>{children}</Link>;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
	className,
	activeClassName,
	children,
	href,
}: {
	className: string,
	activeClassName: string,
	children: React.ReactNode,
	href: string
}) {

	let pathname = usePathname();

	let linkClasses = pathname === href
		? `${activeClassName}`
		: `${className}`;

	return (
		<Link href={href} className={linkClasses}>
			{children}
		</Link>
	);
}
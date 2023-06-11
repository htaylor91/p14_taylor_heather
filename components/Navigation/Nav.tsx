import Link from "next/link"
import Logo from './Logo'
import NavLink from "./NavLink"

function Nav() {
	return (
		<nav className={`flex max-[540px]:flex-col max-[540px]:gap-2 justify-between items-center p-2 max-w-7xl mx-auto`} >
			<Link className="flex justify-center items-center" href="/">
				<Logo />
			</Link>
			<ul className="flex gap-4 whitespace-nowrap">
				<li className="text-lg">
					<NavLink
						className="navlink"
						activeClassName="navlink-active"
						href="/createEmployee"
					>
						Create Employee
					</NavLink>
				</li>
				<li className="text-lg">
					<NavLink
						className="navlink"
						activeClassName="navlink-active"
						href="/employees"
					>
						Employees
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
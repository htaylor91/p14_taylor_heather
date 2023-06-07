import Link from "next/link"
import Logo from './Logo'
import NavLink from "./NavLink"

function Nav() {
	return (
		<nav className={`flex justify-between items-center p-2`} >
			<Link className="flex justify-center items-center" href="/">
				<Logo />
			</Link>
			<ul className="flex gap-4">
				<li>
					<NavLink
						className="navlink"
						activeClassName="navlink-active"
						href="/createEmployee"
					>
						Create Employee
					</NavLink>
				</li>
				<li>
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
import Nav from "./Nav"

function Header({ className }: { className?: string }) {
	return (
		<header className={className}>
			<Nav />
		</header>
	)
}

export default Header
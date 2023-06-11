
function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="min-h-16 grid place-content-center py-2 px-4">
			<p className='flex flex-col items-center'>
				<span>HRNet by Wealth Health</span>
				<span>Copyright {year && year}</span>
			</p>
		</footer>
	)
}

export default Footer
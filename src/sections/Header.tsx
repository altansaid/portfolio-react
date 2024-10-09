import { ContactSection } from './Contact'

export const Header = () => {
	return (
		<div className="flex justify-center items-center sticky top-3 z-10">
			<nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/15 backdrop-blur">
				<a href="#" className="nav-item">
					Home
				</a>
				<a href="#projects" className="nav-item">
					Projects
				</a>
				<a href="#about" className="nav-item">
					About
				</a>
				<a
					href="#contact"
					className="nav-item" //bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900
				>
					Contact
				</a>
			</nav>
		</div>
	)
}

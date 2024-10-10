import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import facebookIcon from '@/assets/icons/facebook.svg'
import githubIcon from '@/assets/icons/github.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import xIcon from '@/assets/icons/x.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import Image from 'next/image'
import { TechIcon } from '@/components/TechIcon'

const footerLinks = [
	{ title: 'Github', icon: githubIcon, href: 'https://github.com/altansaid/' },
	{
		title: 'Linkedin',
		icon: linkedinIcon,
		href: 'https://www.linkedin.com/in/altansaid/',
	},
	{
		title: 'Instagram',
		icon: instagramIcon,
		href: 'https://www.instagram.com/saidaltan/',
	},
	{ title: 'X', icon: xIcon, href: 'https://www.twitter.com/saltan_pk' },
	{
		title: 'Facebook',
		icon: facebookIcon,
		href: 'https://www.facebook.com/said.altan.923',
	},
]

export const Footer = () => {
	return (
		<footer className='relative z-10 overflow-x-clip'>
			<div
				className='absolute h-[200px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-30 '
				style={{
					maskImage:
						'radial-gradient(50% 50% at bottom center, black, transparent)',
				}}
			></div>
			<div className='container'>
				<div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row  md:justify-between items-center gap-8'>
					<div className='text-white/40'>&copy; 2024. All rights reserved.</div>
					<nav className='flex flex-col md:flex-row items-center gap-8'>
						{footerLinks.map((link) => (
							<a
								href={link.href}
								target='_blank'
								key={link.title}
								className='inline-flex items-center gap-1.5'
							>
								<TechIcon component={link.icon} />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	)
}

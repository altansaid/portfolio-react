import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
})

export const metadata: Metadata = {
	title: 'Said Altan | Web Developer Portfolio',
	description:
		'Discover my web development projects, insights, and tech explorations on my personal website.',
	openGraph: {
		type: 'website',
		url: 'https://saidaltan.com',
		title: 'Said Altan | Web Developer Portfolio',
		description:
			'Discover my web development projects, insights, and tech explorations on my personal website.',
		images: [
			{
				url: 'https://saidaltan.com/saidportfolio.png',
				width: 1200,
				height: 630,
				alt: 'Said Altan Portfolio Preview',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'bg-gray-900 text-white antialiased font-sans'
				)}
			>
				{children}
			</body>
		</html>
	)
}

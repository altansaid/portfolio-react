import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import Head from 'next/head'

// Google fontlarını Next.js üzerinden yükleme
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
})

// Ana Layout Bileşeni
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head>
				{/* Sayfa Başlığı */}
				<title>Said Altan | Web Developer Portfolio</title>

				{/* Sayfa Açıklaması */}
				<meta
					name='description'
					content='Discover my web development projects, insights, and tech explorations on my personal website.'
				/>

				{/* Open Graph Etiketleri */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://saidaltan.com' />
				<meta
					property='og:title'
					content='Said Altan | Web Developer Portfolio'
				/>
				<meta
					property='og:description'
					content='Discover my web development projects, insights, and tech explorations on my personal website.'
				/>
				<meta
					property='og:image'
					content='https://saidaltan.com/saidportfolio.png'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:alt' content='Said Altan Portfolio Preview' />

				{/* Twitter Kartı Etiketleri */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Said Altan | Web Developer Portfolio'
				/>
				<meta
					name='twitter:description'
					content='Discover my web development projects, insights, and tech explorations on my personal website.'
				/>
				<meta name='twitter:image' content='/saidportfolio.png' />
			</Head>

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

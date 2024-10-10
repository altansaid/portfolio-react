'use client'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import bookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSS3Icon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import csharpIcon from '@/assets/icons/csharp.svg'
import confluenceIcon from '@/assets/icons/confluence.svg'
import figmaIcon from '@/assets/icons/figma.svg'
import gitIcon from '@/assets/icons/git.svg'
import jiraIcon from '@/assets/icons/jira.svg'
import jQueryIcon from '@/assets/icons/jquery.svg'
import mySQLIcon from '@/assets/icons/mysql.svg'
import nextJSIcon from '@/assets/icons/nextjs.svg'
import nodeIcon from '@/assets/icons/node.svg'
import photoshopIcon from '@/assets/icons/photoshop.svg'
import phpIcon from '@/assets/icons/php.svg'
import pythonIcon from '@/assets/icons/python.svg'
import tailwindIcon from '@/assets/icons/tailwind.svg'
import typeScriptIcon from '@/assets/icons/typescript.svg'
import wordpressIcon from '@/assets/icons/wordpress.svg'
import bootstrapIcon from '@/assets/icons/bootstrap.svg'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const toolboxItems = [
	{ title: 'JavaScript', iconType: JavascriptIcon },
	{ title: 'HTML5', iconType: HTMLIcon },
	{ title: 'CSS3', iconType: CSS3Icon },
	{ title: 'React', iconType: ReactIcon },
	{ title: 'Tailwind CSS', iconType: tailwindIcon },
	{ title: 'Next.js', iconType: nextJSIcon },
	{ title: 'C#', iconType: csharpIcon },
	{ title: 'Confluence', iconType: confluenceIcon },
	{ title: 'Figma', iconType: figmaIcon },
	{ title: 'Git', iconType: gitIcon },
]

const toolboxItems2 = [
	{ title: 'Jira', iconType: jiraIcon },
	{ title: 'JQuery', iconType: jQueryIcon },
	{ title: 'MySQL', iconType: mySQLIcon },
	{ title: 'Node.js', iconType: nodeIcon },
	{ title: 'Photoshop', iconType: photoshopIcon },
	{ title: 'PHP', iconType: phpIcon },
	{ title: 'Python', iconType: pythonIcon },
	{ title: 'TypeScript', iconType: typeScriptIcon },
	{ title: 'WordPress', iconType: wordpressIcon },
	{ title: 'Bootstrap', iconType: bootstrapIcon },
]

const hobbies = [
	{ title: 'Driving', emoji: '🚘', left: '5%', top: '5%' },
	{ title: 'Gaming', emoji: '🎮', left: '50%', top: '5%' },
	{ title: 'Swimming', emoji: '🏊', left: '35%', top: '40%' },
	{ title: 'Camping', emoji: '⛺️', left: '10%', top: '35%' },
	{ title: 'Fitness', emoji: '🏋🏼‍♂️', left: '70%', top: '45%' },
	{ title: 'Music', emoji: '🎹', left: '5%', top: '65%' },
	{ title: 'Reading', emoji: '📕', left: '45%', top: '70%' },
]

export const AboutSection = () => {
	const constraintRef = useRef(null)
	return (
		<div id='about' className='py-20 lg:py-28'>
			<div className='container'>
				<SectionHeader
					eyebrow='About Me'
					title='A Glimpse Into My World'
					description='Learn more about who I am, what I do, and what inspires me.'
				/>
				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-cols-1  gap-8 md:grid-cols-3 lg:grid-cols-3 '>
						{/* <Card className='h-[350px] md:col-span-2 lg:col-span-1'>
							<CardHeader
								title='My Reads'
								description='Explore the books shaping my perspectives'
							/>

							<div className='w-40 mx-auto mt-2 md:mt-0'>
								<Image src={bookImage} alt='Book Cover' />
							</div>
						</Card> */}
						<Card className='h-[350px]  md:col-span-3 lg:col-span-3'>
							<CardHeader
								title='My Toolbox'
								description='Explore the technologies and tools I use to craft exceptional
							digital experiences.'
								className=''
							/>

							<ToolboxItems
								items={toolboxItems}
								className=''
								itemsWrapperClassName='animate-move-left [animation-duration:20s]'
							/>
							<ToolboxItems
								items={toolboxItems2}
								className='mt-6'
								itemsWrapperClassName=' -translate-x-1/2 animate-move-right [animation-duration:20s]'
							/>
						</Card>
					</div>
					<div className='grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3'>
						<Card className='h-[350px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
							<CardHeader
								title='Beyond the Code'
								description='Explore my interests and hobbies beyond the digital realm.'
								className='px-6 py-6'
							/>

							<div className='relative flex-1' ref={constraintRef}>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
										drag
										dragConstraints={constraintRef}
									>
										<span className='font-medium text-gray-950'>
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className='h-[350px] p-0 relative md:col-span-2 lg:col-span-1'>
							<a
								href='https://www.google.com/maps/place/Ottawa,+ON/'
								target='_blank'
							>
								<Image
									src={mapImage}
									alt='map'
									className='h-full w-full object-cover' //object-left-top
								/>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:conten-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
									<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
									<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
									<Image
										src={smileMemoji}
										alt='smiling memoji'
										className='size-20'
									/>
								</div>
							</a>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

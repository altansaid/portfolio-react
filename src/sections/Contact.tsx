'use client'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import React, { useRef } from 'react'

import emailjs from '@emailjs/browser'

export const ContactSection = () => {
	const form = useRef<HTMLFormElement | null>(null) // Tip belirtildi

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault()

		if (form.current) {
			// form.current'in null olup olmadığını kontrol edin
			emailjs
				.sendForm(
					'service_zfxc7ji',
					'template_z7enjsd',
					form.current,
					'oPBdwIe19kBjMRDIY'
				)
				.then(
					(result) => {
						console.log(result.text)
						alert('Thank you! Your email has been sent.')
						form.current?.reset()
					},
					(error) => {
						console.log(error.text)
						alert('Mesaj gönderilemedi, tekrar deneyin.')
					}
				)
		}
	}
	// 	<div id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20 text-black z-30'>
	// 		<form ref={form} onSubmit={sendEmail} className=' flex flex-col'>
	// 			<label>Adiniz</label>
	// 			<input type='text' name='user_name' required />

	// 			<label>Email Adresiniz</label>
	// 			<input type='email' name='user_email' required />

	// 			<label>Mesajiniz</label>
	// 			<textarea name='message' required />

	// 			<button type='submit'>Gonder</button>
	// 		</form>
	// 	</div>

	return (
		<div id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20 z-10'>
			<div className='container'>
				<div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
					<div
						className='absolute inset-0 opacity-5 -z-10'
						style={{
							backgroundImage: `url(${grainImage.src})`,
						}}
					></div>
					<div className='flex flex-col md:flex-col lg:flex-row gap-8 md:gap-16 items-center'>
						<div className=''>
							<h2 className='font-serif text-2xl md:text-3xl'>
								Let&apos;s create something amazing together
							</h2>
							<p className='text-sm md:text-base mt-2'>
								Ready to bring your next project to life? Let&apos;s connect and
								discuss how I can help you achieve your goals.
							</p>
						</div>
						<div className='w-full md:px-10'>
							<form
								ref={form}
								onSubmit={sendEmail}
								className=' flex flex-col z-10 text-left lg:w-[400px] md:w-full '
							>
								<label className='font-semibold'>Name</label>
								<input
									type='text'
									name='user_name'
									required
									className='rounded-lg h-8  my-1 px-3 p-1 bg-transparent border border-black   outline-none'
								/>
								<label className='font-semibold'>Email</label>
								<input
									type='email'
									name='user_email'
									required
									className='rounded-lg h-8  my-1 px-3 py-1 bg-transparent border border-black outline-none'
								/>
								<label className='font-semibold'>Message</label>
								<textarea
									name='message'
									required
									className='rounded-lg h-[120px] md:h-20  my-1 px-3 py-1 bg-transparent border border-black outline-none'
								/>
								<button className='text-white bg-gray-900 inline-flex items-center mt-4 px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
									<span className='font-semibold'>Send</span>
									<ArrowUpRightIcon className='size-4' />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

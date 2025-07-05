import { Handler } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// The email address you verified with Resend
const VERIFIED_EMAIL = 'alta0073@algonquinlive.com'

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}')

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: VERIFIED_EMAIL, // Always send to your verified email
      replyTo: email, // Set reply-to as the sender's email
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email} (You can reply directly to this email)
Message: ${message}
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    }
  } catch (error) {
    console.error('Resend error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    }
  }
} 
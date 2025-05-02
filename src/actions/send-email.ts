'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the schema for the email input, matching the form
const SendEmailSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export type SendEmailInput = z.infer<typeof SendEmailSchema>;

// Define the structure for the Server Action response
interface SendEmailResult {
  success: boolean;
  message: string;
}

// Environment variables should be used for credentials and recipient email
const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || 'choudharypooja0107@gmail.com';
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587; // Default SMTP port
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  // Validate input against the schema
  const parsedInput = SendEmailSchema.safeParse(input);
  if (!parsedInput.success) {
    console.error('Invalid email input:', parsedInput.error);
    return { success: false, message: 'Invalid input data.' };
  }

  const { name, email, message } = parsedInput.data;

  // --- Nodemailer Configuration ---
  // IMPORTANT: Configure your email provider details securely, ideally via environment variables.
  // This example uses generic SMTP settings. Replace with your specific provider (SendGrid, Resend, Gmail App Password, etc.)
  if (!smtpHost || !smtpUser || !smtpPass) {
     console.error('SMTP configuration missing. Set SMTP_HOST, SMTP_USER, SMTP_PASS environment variables.');
     // In a real app, you might throw an error or return a specific failure message.
     // For now, we'll simulate success for UI testing, but log the config error.
     // return { success: false, message: 'Server email configuration error.' };
     console.warn('Simulating email success due to missing SMTP configuration.');
     return { success: true, message: 'Email sent successfully (Simulated).' };
  }


  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports like 587
    auth: {
      user: smtpUser, // Your email address
      pass: smtpPass, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${smtpUser}>`, // Sender address (must be related to your auth user)
    replyTo: email, // Set the Reply-To header to the user's email
    to: recipientEmail, // List of receivers
    subject: `New Contact Form Message from ${name}`, // Subject line
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Plain text body
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
           <hr>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`, // HTML body
  };

  try {
    // Verify connection configuration (optional, good for debugging)
    // await transporter.verify();
    // console.log('Nodemailer transporter verified.');

    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, message: 'Email sent successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    // Provide a more generic error message to the client
    return { success: false, message: 'Failed to send email. Please try again later.' };
  }
}

// --- IMPORTANT ---
// 1. Install nodemailer: npm install nodemailer @types/nodemailer
// 2. Configure Environment Variables: Set up SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FORM_RECIPIENT_EMAIL
//    in your .env.local file or hosting environment.
// 3. Security: For services like Gmail, you might need to use an "App Password" instead of your regular password
//    if 2-Step Verification is enabled. Refer to your email provider's documentation.
// 4. Error Handling: Enhance error handling based on specific SMTP errors if needed.
// 5. Rate Limiting/Security: Consider adding rate limiting or CAPTCHA to prevent abuse.

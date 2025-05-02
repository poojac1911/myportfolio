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
    console.error('Invalid email input:', parsedInput.error.flatten().fieldErrors);
    // Provide more specific feedback if possible, otherwise a general message
    const errorMessages = Object.entries(parsedInput.error.flatten().fieldErrors)
        .map(([key, value]) => `${key}: ${value?.join(', ')}`)
        .join('; ');
    return { success: false, message: `Invalid input: ${errorMessages || 'Please check your entries.'}` };
  }

  const { name, email, message } = parsedInput.data;

  // --- Check for SMTP Configuration ---
  if (!smtpHost || !smtpUser || !smtpPass) {
     console.error('SMTP configuration missing. Set SMTP_HOST, SMTP_USER, SMTP_PASS environment variables.');
     // Return a specific error message indicating server configuration issue
     return { success: false, message: 'Email server not configured. Please contact the administrator.' };
  }

  // --- Nodemailer Configuration ---
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports like 587
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    // Optional: Add timeout settings
    // connectionTimeout: 5000, // 5 seconds
    // greetingTimeout: 5000,
    // socketTimeout: 5000,
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
    console.log(`Attempting to send email to ${recipientEmail} from ${email}...`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, message: 'Email sent successfully!' };

  } catch (error) {
    console.error('Error sending email via Nodemailer:', error);
    // Provide a more generic error message to the client, but log the specific error server-side
    // Check for specific error types if needed (e.g., authentication failure)
    let clientMessage = 'Failed to send email. Please try again later.';
    if (error instanceof Error) {
        // You might customize the message based on error.code or error.message
        // For example: if (error.code === 'EAUTH') clientMessage = 'Authentication failed. Please check server configuration.';
    }
    return { success: false, message: clientMessage };
  }
}

// --- IMPORTANT ---
// 1. Ensure nodemailer is installed: npm install nodemailer @types/nodemailer
// 2. Configure Environment Variables: Set up SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FORM_RECIPIENT_EMAIL
//    in your .env.local file or hosting environment. **These are crucial for the email functionality to work.**
// 3. Security: For services like Gmail, you might need to use an "App Password" instead of your regular password
//    if 2-Step Verification is enabled. Refer to your email provider's documentation.
// 4. Debugging: Check server logs for detailed error messages from Nodemailer if emails fail to send.
// 5. Rate Limiting/Security: Consider adding rate limiting or CAPTCHA (e.g., Google reCAPTCHA) to prevent abuse of the contact form.

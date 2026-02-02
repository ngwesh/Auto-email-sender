import sgMail from '../config/sendgrid';
import dotenv from 'dotenv';

dotenv.config();
export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const msg: any = {
      to: options.to,
      from: process.env.FROM_EMAIL,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully');
    return response;
  } catch (error: any) {
    console.error('Error sending email:', error.response?.body || error.message);
    throw error;
  }
};

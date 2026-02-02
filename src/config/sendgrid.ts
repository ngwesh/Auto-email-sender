import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in environment variables');
}

sgMail.setApiKey(SENDGRID_API_KEY);

export default sgMail;


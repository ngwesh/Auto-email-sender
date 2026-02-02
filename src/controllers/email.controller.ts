import { Request, Response } from "express";
import { EmailOptions, sendEmail } from "../services/email.service";
import dotenv from 'dotenv';

dotenv.config()
export const sendAutoEmail = async (req: Request, res: Response) => {
    try {
        if(!req.body || !req.body.to || !req.body.text || !req.body.subject){
            return res.status(400).json({message: "Required parameters missing!"});
        }
        const payload: EmailOptions = {
            to: process.env.YOUR_EMAIL as string,
            subject: req.body.subject,
            text: req.body.text
        } 
        const autoReplyPayload = {
            to: req.body.to,
            subject: req.body.subject,
            text: `Hello ${req.body.name},\n\nThank you for reaching out to me. I will review your message and get back shortly.\n\nThanks & Regards\nDerrick Ngwenyi.\n\n+254707949675`
        }
        const result = await sendEmail(payload);
        const autoReply = req.body.name ? await sendEmail(autoReplyPayload) : "";
        console.log("***** Result from send email:", result);
        console.log("***** Result Auto Reply:", autoReply);
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(500).json({message: "Failed to send email!", error: error.message});
    }
}


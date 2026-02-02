import { Request, Response } from "express";
import { EmailOptions, sendEmail } from "../services/email.service";

export const sendAutoEmail = async (req: Request, res: Response) => {
    try {
        if(!req.body || !req.body.to || !req.body.message || !req.body.subject){
            return res.status(400).json({message: "Required parameters missing!"});
        }
        const payload: EmailOptions = {
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.message
        } 
        const result = await sendEmail(payload);
        console.log("***** Result from send email:", result);
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(500).json({message: "Failed to send email!", error: error.message});
    }
}


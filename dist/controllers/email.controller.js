"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAutoEmail = void 0;
const email_service_1 = require("../services/email.service");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendAutoEmail = async (req, res) => {
    try {
        if (!req.body || !req.body.to || !req.body.text || !req.body.subject) {
            return res.status(400).json({ message: "Required parameters missing!" });
        }
        const payload = {
            to: process.env.YOUR_EMAIL,
            subject: req.body.subject,
            text: req.body.text
        };
        const autoReplyPayload = {
            to: req.body.to,
            subject: req.body.subject,
            text: `Hello ${req.body.name},\n\nThank you for reaching out to me. I will review your message and get back shortly.\n\nThanks & Regards\nDerrick Ngwenyi.\n\n+254707949675`
        };
        const result = await (0, email_service_1.sendEmail)(payload);
        const autoReply = req.body.name ? await (0, email_service_1.sendEmail)(autoReplyPayload) : "";
        console.log("***** Result from send email:", result);
        console.log("***** Result Auto Reply:", autoReply);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to send email!", error: error.message });
    }
};
exports.sendAutoEmail = sendAutoEmail;

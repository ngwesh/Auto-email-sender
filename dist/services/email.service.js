"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const sendgrid_1 = __importDefault(require("../config/sendgrid"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendEmail = async (options) => {
    try {
        const msg = {
            to: options.to,
            from: process.env.FROM_EMAIL,
            subject: options.subject,
            text: options.text,
            html: options.html,
        };
        const response = await sendgrid_1.default.send(msg);
        console.log('Email sent successfully');
        return response;
    }
    catch (error) {
        console.error('Error sending email:', error.response?.body || error.message);
        throw error;
    }
};
exports.sendEmail = sendEmail;

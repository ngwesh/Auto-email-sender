import express from 'express';
import { sendAutoEmail } from '../controllers/email.controller';

const router = express.Router();

router.post('/send', sendAutoEmail);

export default router;

import express from 'express';
import { createToken } from '../controllers/tokens.controller';
const router = express.Router();

router.post('/',createToken);

module.exports = router;
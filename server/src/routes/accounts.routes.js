import express from 'express';
import { createAccount } from '../controllers/accounts.controllers';
const router = express.Router();

router.post('/',createAccount);

module.exports = router;
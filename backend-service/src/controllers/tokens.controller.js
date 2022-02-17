import { accountExists } from "../services/accounts.servcie";
import { createNewToken } from "../services/tokens.service";
import { signUUID } from "../utils/generateUniqueId";
import {EstatusCode} from '../enums/EStatusCode'
import {computeUnits, computeValidDays, generateToken} from '../utils/computations';

/*-- comment -- */
const createToken = async (req, res) => {
    const {account_id, amount} = req.body;
    const accountExist = await accountExists(account_id);
    if(!accountExist) return res.status(404).json({success:false, message:'Account not found'})
    if(amount < 100 ) return res.status(400)
    .json({success: false, status: 400, message:"Invalid amount"});

    const valid_days = computeValidDays(amount);
    if(valid_days > 365)  return res.status(400)
    .json({success: false, status: 400, message:"Invalid amount"});
    
    const units = computeUnits(amount);
    const token = generateToken();

    const newToken = await createNewToken({
        id: signUUID(),
        account_id,
        token,
        units,
        valid_days,
        amount,
        status:'ACTIVE'
    })
    if(!newToken) return res.status(400).json({success:false, message: 'Token not created'});
    return res.status(201).json({success: true, message:'Token created', payload: newToken})
}

export {createToken}
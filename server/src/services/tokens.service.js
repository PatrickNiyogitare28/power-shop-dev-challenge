import models from '../database/models';
import EstatusCode from '../enums/EStatusCode'

const {Token} = models;
const {BAD_REQUEST} = EstatusCode;

const createNewToken = async ({id, account_id, token, amount, status, valid_days, units}) => {
    const newToken = await Token.create({id, account_id, token, amount, status, valid_days, units});
    if(!token) return {success: false, status: BAD_REQUEST, message:'Token not created'}
    return {success: false, status: BAD_REQUEST, payload: newToken}
}
export {createNewToken}
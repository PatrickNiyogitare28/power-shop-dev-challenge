import models from '../database/models';
import EstatusCode from '../enums/EStatusCode'

const {Account} = models;
const {BAD_REQUEST} = EstatusCode;
const createNewAccount = async ({id, first_name, last_name, account_number, phone_number}) => {
    const accountExists = await _existsByPhoneNumber(phone_number);
    if(accountExists) return {success: false, status: BAD_REQUEST, message: "Account with phone ["+phone_number+"] exists"};
    const user = await models.Account.create({id,first_name, last_name, account_number, phone_number});
    if(!user) return {success: false, status: 400, message:'User not created'}
    return {success: true, status: 201, payload: user}
}

const _existsByPhoneNumber = async (phone_number) => {
    let account;
    try{
      account = await Account.findOne({where: {phone_number}});
      if(account) return true;
      return false;
    }
    catch(e){
        return false;
    }
}

const accountExists = async (id) => {
    let account;
    try{
      account = await Account.findOne({where: {id}});
      if(account) return true;
      return false;
    }
    catch(e){
        return false;
    }
}


export {createNewAccount, accountExists}
import { createNewAccount } from "../services/accounts.servcie";
import { generateAccountNumber } from "../utils/generateAccountNo";
import { signUUID } from "../utils/generateUniqueId";

/*-- comment -- */
const createAccount = async (req, res) => {
    const {first_name, last_name, phone_number} = req.body;
    const payload = await createNewAccount({id: signUUID(), first_name, last_name, phone_number, account_number: generateAccountNumber()});
    return res.status(payload?.status || 500).json(payload);
}

export {createAccount}
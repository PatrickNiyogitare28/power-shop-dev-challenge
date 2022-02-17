/*
 @Role: generate 6 digits verification code
*/

const generateAccountNumber = () => {
    return (Math.floor(100000 + Math.random() * 900000));
}
export {generateAccountNumber};
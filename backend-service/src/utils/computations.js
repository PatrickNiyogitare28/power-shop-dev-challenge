const computeUnits = (amount) => {
  return amount * 10.6
}

const computeValidDays = (amount) => {
    return Math.round(amount / 100)
}
const generateToken = () => {
    return (Math.floor(100000 + Math.random() * 900000));
}

export {computeUnits, computeValidDays, generateToken}
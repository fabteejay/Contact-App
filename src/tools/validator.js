export const valueCheck = (payload) => {
  if (payload) {
    return true;
  }
  return false;
};

export const emailCheck = (emailAddress) => {
  if (valueCheck(emailAddress)) {
    return /^\D+@\D+\.\w+$/i.test(emailAddress);
  }
  return false;
};

export const phoneCheck = (phoneNumber) => {
  if (valueCheck(phoneNumber)) {
    return /^\+234\d{8}$/i.test(phoneNumber);
  }
  return false;
};

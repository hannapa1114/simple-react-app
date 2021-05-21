export const checkEmail = (email) => {
  const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

  return emailRegex.test(email.value);
};

export const checkPassword = (password) => {
  const passwordRegex = /^\s*(?:\S\s*){8,15}$/;

  return passwordRegex.test(password.value);
};

export const checkPasswordSame = (p1, p2) => {
  return p1.value === p2.value;
};

export const checkMobile = (mobile) => {
  const mobileRegex = /^0+1+(0|1|6|7|9)\d{4}\d{4}$/;

  return mobileRegex.test(mobile.value);
};

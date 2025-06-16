export const passwordRegex =
  /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const telephoneRegex = /^[+]7\d{10}?/;

export const testPassword = (password: string) => {
  return passwordRegex.test(password);
};

export const testPhoneNumber = (number: string) => {
  return telephoneRegex.test(number);
};

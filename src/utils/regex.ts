export const passwordRegex =
  /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const testPassword = (password: string) => {
  return passwordRegex.test(password);
};

const SPECIAL_CHARS = "!\"#$%&'()*+,-./:;<=>?@\\[\\]^_`{|}~";

export const validateStringByRegex = (text: string, maxLength: number) => {
  // Return false if maxLength is not a safe integer (like float, string and etc)
  if (!Number.isSafeInteger(maxLength)) {
    return false;
  }

  const stringRegex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${SPECIAL_CHARS}])[\\w${SPECIAL_CHARS}]{0,${maxLength}}$`
  );

  return stringRegex.test(text);
};

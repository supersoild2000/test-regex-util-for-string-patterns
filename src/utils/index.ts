const SPECIAL_CHARS = "!\"#$%&'()*+,-./:;<=>?@\\[\\]^_`{|}~";

export const validateStringByRegex = (
  text: string,
  minLength: number,
  maxLength: number
) => {
  // Return false if minLength or maxLength is not a safe integer (like float, string and etc) to avoid error in regex
  if (!Number.isSafeInteger(maxLength) || !Number.isSafeInteger(minLength)) {
    return false;
  }

  // Return false if minLength bigger than maxLength to avoid error in regex
  if (minLength > maxLength) return false;

  const stringRegex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${SPECIAL_CHARS}])[\\w${SPECIAL_CHARS}]{${minLength},${maxLength}}$`
  );

  return stringRegex.test(text);
};

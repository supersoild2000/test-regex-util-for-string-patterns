import { validateStringByRegex } from "..";

describe("validateStringByRegex tests", () => {
  it("case: too short input", () => {
    expect(validateStringByRegex("aZ1[!", 6, 32)).toBe(false);
  });
  it("case: too long input", () => {
    expect(validateStringByRegex("aZ1[!abcD", 4, 8)).toBe(false);
  });
  it("case: matching input length", () => {
    expect(validateStringByRegex("aZ1[!abc", 8, 8)).toBe(true);
    expect(validateStringByRegex("df!D#2", 6, 6)).toBe(true);
  });
  it("case: missing uppercase", () => {
    expect(validateStringByRegex("az1[!abcd", 4, 8)).toBe(false);
  });
  it("case: missing lowercase", () => {
    expect(validateStringByRegex("AZ1[!ABCD", 4, 8)).toBe(false);
  });
  it("case: missing digit", () => {
    expect(validateStringByRegex("aZ[!abcD", 4, 8)).toBe(false);
  });
  it("case: missing special characters", () => {
    expect(validateStringByRegex("aZ1abcD", 4, 8)).toBe(false);
  });
  it("case: whitespaces in different positions", () => {
    expect(validateStringByRegex(" aZ1abcD", 4, 8)).toBe(false);
    expect(validateStringByRegex("a Z1abcD", 4, 8)).toBe(false);
    expect(validateStringByRegex("aZ 1ab cD", 4, 8)).toBe(false);
    expect(validateStringByRegex("aZ1abcD ", 4, 8)).toBe(false);
    expect(validateStringByRegex("  aZ1a   bcD ", 4, 16)).toBe(false);
  });
  it("case: string with all allowed characters", () => {
    expect(
      validateStringByRegex(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        4,
        128
      )
    ).toBe(true);
  });
  it("case: minLength or maxLength has invalid values", () => {
    expect(validateStringByRegex("aZ1[!abc", 4.3, 14)).toBe(false);
    expect(validateStringByRegex("aZ1[!abc", 4, 14.2434)).toBe(false);
    expect(validateStringByRegex("aZ1[!abc", 8, 4)).toBe(false);
    expect(validateStringByRegex("aZ1[!abc", NaN, 4)).toBe(false);
    expect(validateStringByRegex("aZ1[!abc", 4, NaN)).toBe(false);
    expect(validateStringByRegex("aZ1[!abc", Infinity, 4)).toBe(false);
    expect(validateStringByRegex("aZ1[!abc", 4, Infinity)).toBe(false);
  });
});

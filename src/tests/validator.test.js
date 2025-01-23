import { validateCardNumber, getCardProvider } from "../src/validator";

test("valid card number", () => {
  expect(validateCardNumber("4111111111111111")).toBe(true);
});

test("get card provider", () => {
  expect(getCardProvider("4111111111111111")).toBe("Visa");
});

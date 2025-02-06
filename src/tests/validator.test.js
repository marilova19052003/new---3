import { isValidCardNumber, getCardType } from "../validator";

test("Valid card number", () => {
  expect(isValidCardNumber("4111 1111 1111 1111")).toBe(true);
});

test("Invalid card number", () => {
  expect(isValidCardNumber("1234 5678 9012 3456")).toBe(false);
});

test("Get card type", () => {
  expect(getCardType("4111 1111 1111 1111")).toBe("Visa");
  expect(getCardType("5111 1111 1111 1118")).toBe("MasterCard");
});

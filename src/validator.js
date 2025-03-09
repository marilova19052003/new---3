export function isValidCardNumber(cardNumber) {
  const sanitized = cardNumber.replace(/\D/g, "");
  let sum = 0;
  let shouldDouble = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

export function getCardType(cardNumber) {
  const sanitized = cardNumber.replace(/\D/g, "");
  const firstDigit = sanitized.charAt(0);
  const firstTwoDigits = sanitized.substr(0, 2);

  if (/^4/.test(sanitized)) return "Visa";
  if (/^5[1-5]/.test(sanitized)) return "MasterCard";
  if (/^3[47]/.test(sanitized)) return "American Express";
  if (/^6/.test(sanitized)) return "Discover";
  return "Unknown";
}

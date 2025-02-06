import "./styles.css";
import { isValidCardNumber, getCardType } from "../src/validator";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("card-input");
  const result = document.getElementById("result");

  input.addEventListener("input", () => {
    const cardNumber = input.value;
    if (isValidCardNumber(cardNumber)) {
      result.textContent = `Тип карты: ${getCardType(cardNumber)}`;
    } else {
      result.textContent = "Неверный номер карты";
    }
  });
});

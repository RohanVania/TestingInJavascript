import { add } from "../math.js";
import { validateNumber, validateStringNotEmpty } from "./validation.js";


export function transformToNumber(value) {
  return +value;
}


export function cleanInput(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
} 
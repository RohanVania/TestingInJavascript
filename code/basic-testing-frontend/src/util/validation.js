export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  console.log(isNaN(number))
  console.log(typeof(number)==number)
  if (isNaN(number) || typeof(number)!=='number') {
    throw new Error('Invalid number input.');
  }
}

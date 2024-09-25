import { generateOutput } from './src/output.js';
import { extractFormData } from './src/parser.js';

import { cleanInput } from './src/util/numbers.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractFormData(form);

  const result = cleanInput(numberInputs);

  const resultText = generateOutput(result)

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);


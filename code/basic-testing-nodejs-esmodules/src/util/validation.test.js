import { test, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from "./validation"

//* Test Suites is used to organize all the test
//* Describe is used to give identifier to the test cases and organize them

describe('validateStringNotEmpty', () => {
    test('Empty Input for validating String', () => {
        const result = () => {
            validateStringNotEmpty();
        }
        expect(result).toThrow(/Cannot read properties of undefined/);
    })


    test('Passing Empty spacess throw error', () => {
        const input = "         ";
        const result = () => { const result1 = validateStringNotEmpty(input) };
        expect(result).toThrow()
    })

    test('should throw an error with a message that contains a reason (must not be empty)', () => {
        const input = '';
        const res = () => validateStringNotEmpty(input);
        expect(res).toThrow(/must not be empty/)
    })
})


describe('validateNumber()', () => {
    test('should throw an error if a non-numeric value is provided', () => {
        const input = '1';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    });

    test('should not throw an error, if a number is provided', () => {
        const input = 1;
        const validationFn = () => validateNumber(input);
        expect(validationFn).not.toThrow();
    });



})


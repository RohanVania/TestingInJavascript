import { test, describe, expect } from "vitest"
import { generateToken, generateTokenPromise } from "./async-example"


describe('Generate Token ()', () => {

    //* Method 1 to handle for callback
    test('should generate a token a value', (done) => {
        const inp1 = 'r1@gmail.com'
        generateToken(inp1, (err, token) => {
            try {
                expect(token).toBeDefined();
                done()

            } catch (err) {
                console.log(err)
                done(err)
            }

        })
    })

    //* Method 1 to handle promise based testing
    test('Shoudl a generate a token value for promise function', () => {
        const testInput = 'r2@gmail.com';
        const token = generateTokenPromise(testInput)
        return expect(token).resolves.toBeDefined();
    })

    //* Method 2 to handle promise based testing
    test('Shoudl a generate a token value for promise function approach second', async () => {
        const testInput = 'r2@gmail.com';
        const token = await generateTokenPromise(testInput)
        expect(token).not.toBe(2);
    })

})
import { test,expect,describe} from "vitest"
import { generateOutput } from "./output";

describe(generateOutput(),()=>{
    test("should return string no matter what value is passed",()=>{
        const input1=1;
        const input2="";
        const input3="invalid"

        expect(generateOutput(input1)).toBeTypeOf('string')
        expect(generateOutput(input2)).toBeTypeOf('string')
        expect(generateOutput(input3)).toBeTypeOf('string')
    })

    test("should return a string with invalida if invalid is provided",()=>{
        const input1='invalid';
        expect(generateOutput(input1)).toContain('Invalid');
    })

    test("should return a empty string if no-calc",()=>{
        const input1='no-calc';
        expect(generateOutput(input1)).toBe('');
    })
})
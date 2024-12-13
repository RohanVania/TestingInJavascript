import { expect, test } from "vitest"
import {transformToNumber} from "./numbers" 

test('Passing a number as string',()=>{
    const number='12';
    const result=transformToNumber(number);
    expect(result).toBe(12).toBeTypeOf('number')
})

test('Passing invalid string',()=>{
    const parameter='😢';
    const parameter2={};
    const result=transformToNumber(parameter);
    const result2=transformToNumber(parameter2);
    expect(result).toBeDefined();
    expect(result2).toBeNaN();
})
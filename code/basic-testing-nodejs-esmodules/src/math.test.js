import { expect, test } from "vitest"
import { add } from "./math"

test('The sum of two number should be valid', () => {
    expect(add([1, 2])).toBe(3);
})

test('Testing for Negative number ', () => {
    expect(add([-1, -2])).toBe(-3);
})

//* Using AAA PAttern : Arrange, Act, Assert
test('All non valid number passed as string', () => {
    const numbers = ['1', '2'];
    //* We use like this so our expectation is correct
    const expectedResult = numbers.reduce((previous, current) => +previous + +current);
    expect(add(numbers)).toBe(expectedResult)
})

test('If an invalid input is passed in array', () => {
    const numbers = [1, 2, , 'undefined', 'Nan', null, 4];
    const expectedResult = numbers.reduce((previous, current) => +previous + +current);
  
    expect(add(numbers)).toBeNaN();
})


test('If an empty array is passed',()=>{
    const numbers=[];
    expect(add(numbers)).toBe(0);
})

//* One Way to do this
test('Throw error if no values are passed',()=>{
    try{
        const result=add()
    }catch(err){
        expect(err).toBeDefined()
        
    }
})

//* Another way to do this 
test('Second way of handling Throw error if no values are passed',()=>{
    const result=()=>{
        add();
    }
    expect(result).toThrow();
})

//* It should throw an error if multiple arrguments are passed instead of array
test('Throw error if multiple arguments are passed',()=>{
   const result=()=>{
    add(12,1);
   }
   expect(result).toThrow(
    //number is not iterable
   );
})
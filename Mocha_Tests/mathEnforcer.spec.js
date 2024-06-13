import { mathEnforcer } from './mathEnforcer.js';
import { expect } from 'chai';

describe('The object mathEnforcer', () => {
    describe("addFive", () => {
        it('should return undefined when passed string as input', () => {})
        const stringInput = 'string';
        const udefinedResult = mathEnforcer.addFive(stringInput);
        expect(udefinedResult).to.equal(undefined);

        it('should return undefined when passed undefined as input', () => {})
        const undefinedInput = undefined;
        const undefinedResult = mathEnforcer.addFive(undefinedInput);
        expect(undefinedResult).to.equal(undefined);

        it('should return undefined when passed object as input', () => {})
        const objectInput = {};
        const objectResult = mathEnforcer.addFive(objectInput);
        expect(objectResult).to.equal(undefined);

        it('should return udefined when passed number as string', () => {})
        const numberInput = "5";
        const numberResult = mathEnforcer.addFive(undefinedInput);
        expect(objectResult).to.equal(undefined);

        it('should return correct result when passed float number as input and asserted equal', () => {
            const floatInput = 5.5;
            const floatResult = mathEnforcer.addFive(floatInput);
            expect(floatResult).to.equal(10.5);
        })
    })

    describe("subtractTen", () => {
        it('should return undefined when passed string as input', () => {})
        const stringInput = 'string';
        const udefinedResult = mathEnforcer.subtractTen(stringInput);
        expect(udefinedResult).to.equal(undefined);
    
        it('should return undefined when passed undefined as input', () => {})
        const undefinedInput = undefined;
        const undefinedResult = mathEnforcer.subtractTen(undefinedInput);
        expect(undefinedResult).to.equal(undefined);
    
        it('should return undefined when passed object as input', () => {})
        const objectInput = {};
        const objectResult = mathEnforcer.subtractTen(objectInput);
        expect(objectResult).to.equal(undefined);
    
        it('should return udefined when passed number as string', () => {})
        const numberInput = "5";
        const numberResult = mathEnforcer.subtractTen(undefinedInput);
        expect(objectResult).to.equal(undefined);

        it('should return correct result when passed float number as input and asserted equal', () => {
            const floatInput = 5.5;
            const floatResult = mathEnforcer.subtractTen(floatInput);
            expect(floatResult).to.equal(-4.5);
        })
    
    })
    describe("sum", () => {
        it('should return undefined when passed string as input', () => {})
        const stringInput = 'string';
        const udefinedResult = mathEnforcer.sum(stringInput);
        expect(udefinedResult).to.equal(undefined);
    
        it('should return undefined when passed undefined as input', () => {})
        const undefinedInput = undefined;
        const undefinedResult = mathEnforcer.sum(undefinedInput);
        expect(undefinedResult).to.equal(undefined);
    
        it('should return undefined when passed object as input', () => {})
        const objectInput = {};
        const objectResult = mathEnforcer.sum(objectInput);
        expect(objectResult).to.equal(undefined);
    
        it('should return udefined when passed number as string', () => {})
        const numberInput = "5";
        const numberResult = mathEnforcer.sum(undefinedInput);
        expect(objectResult).to.equal(undefined);

        it('should return correct result when passed float numbers as input and asserted equal', () => {
            const firstFloatInput = 5.5;
            const secondFloatInput = 5.5;
            const floatResult = mathEnforcer.sum(firstFloatInput, secondFloatInput);
            expect(floatResult).to.equal(11);
        })

        it('should return correct result when passed negative integers as input and asserted equal', () => {
            const firstInput = -5;
            const secondInput = -5;
            const result = mathEnforcer.sum(firstInput, secondInput);
            expect(result).to.equal(-10);
        })

        it('should return undefined when Param1: incorrect and Param2: correct', () => {
            const firstInput = "string";
            const secondInput = 5;
            const result = mathEnforcer.sum(firstInput, secondInput);
            expect(result).to.equal(undefined);
        })

        it('should return undefined when Param1: correct and Param2: incorrect', () => {
            const firstInput = 5;
            const secondInput = "string";
            const result = mathEnforcer.sum(firstInput, secondInput);
            expect(result).to.equal(undefined);
        })
    });
});
   

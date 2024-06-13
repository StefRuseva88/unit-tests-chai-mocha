import { arrayAnalyzer } from './arrayAnalyzer.js';
import { expect } from 'chai';

describe('The function arrayAnalyzer', () => {

    it('should return undefined when passed string as input', () => {
        const stringInput = 'string';
        const undefinedResult = arrayAnalyzer(stringInput);
        expect(undefinedResult).to.equal(undefined);
    });

    it('should return undefined when passed undefined as input', () => {
        const undefinedInput = undefined;
        const undefinedResult = arrayAnalyzer(undefinedInput);
        expect(undefinedResult).to.equal(undefined);
    });

    it('should return undefined when passed object as input', () => {
        const objectInput = {};
        const objectResult = arrayAnalyzer(objectInput);
        expect(objectResult).to.equal(undefined);
    });

    it('should return undefined when passed number as string', () => {
        const numberInput = "5";
        const numberResult = arrayAnalyzer(numberInput);
        expect(numberResult).to.equal(undefined);
    });

    it('should return correct result when passed array of numbers and asserted equal', () => {
        const arrayInput = [1, 2, 3, 4, 5];
        const arrayResult = arrayAnalyzer(arrayInput);
        expect(arrayResult).to.deep.equal({ min: 1, max: 5, length: 5 });
    });

    it('should return correct result when passed array of negative numbers and asserted equal', () => {
        const arrayInput = [-1, -2, -3, -4, -5];
        const arrayResult = arrayAnalyzer(arrayInput);
        expect(arrayResult).to.deep.equal({ min: -5, max: -1, length: 5 });
    });

    it('should return correct result when passed array of mixed numbers and asserted equal', () => {
        const arrayInput = [1, 2, -3, 4, -5];
        const arrayResult = arrayAnalyzer(arrayInput);
        expect(arrayResult).to.deep.equal({ min: -5, max: 4, length: 5 });
    });

    it('should return correct result when passed array of one number and asserted equal', () => {
        const arrayInput = [1];
        const arrayResult = arrayAnalyzer(arrayInput);
        expect(arrayResult).to.deep.equal({ min: 1, max: 1, length: 1 });
    });

});
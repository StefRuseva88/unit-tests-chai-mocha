import { charLookUp } from './charLookUp.js';
import { expect } from 'chai';

describe('The function charLookUp', () => {
    it("should return undefined when first parameter is incorrect and the second parameter is correct ", () => {
const incorectFirstParam = 123;
const correctSecondParam = 1;
const result = charLookUp(incorectFirstParam, correctSecondParam);
expect(result).to.equal(undefined);
    });

    it("should return undefined when second parameter is incorrect and the first parameter is correct ", () => {
        const correctFirstParam = 'abc';
        const incorectSecondParam = '1';
        const result = charLookUp(correctFirstParam, incorectSecondParam);
        expect(result).to.equal(undefined);
    });

    it("should return undefined when both parameters are incorrect ", () => {
        const incorectFirstParam = 123;
        const incorectSecondParam = '1';
        const result = charLookUp(incorectFirstParam, incorectSecondParam);
        expect(result).to.equal(undefined);
    });

    it("should return the correct character when both parameters are correct ", () => {
        const correctFirstParam = 'abc';
        const correctSecondParam = 1;
        const result = charLookUp(correctFirstParam, correctSecondParam);
        expect(result).to.equal('b');
    });

    it("should return 'Incorrect index' when the index is greater than the length of the string ", () => {
        const correctFirstParam = 'abc';
        const indexGreaterThanLength = 3;
        const result = charLookUp(correctFirstParam, indexGreaterThanLength);
        expect(result).to.equal('Incorrect index');
    });

    it("should return 'Incorrect index' when the index is negative ", () => {
        const correctFirstParam = 'abc';
        const negativeIndex = -1;
        const result = charLookUp(correctFirstParam, negativeIndex);
        expect(result).to.equal('Incorrect index');
    });
});

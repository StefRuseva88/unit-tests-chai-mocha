import { checkForSymmetry } from './checkForSymmetry.js';
import { expect } from 'chai';

describe('The function checkForSymmetry', () => {
    it('should return false for non-array input', () =>{
        const inputArr = 'string';
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(false);
    })

    it('should return true for an empty array', () => {
        const inputArr = [];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(true);
    })

    it('should return true for an array with one element', () => {
        const inputArr = [1];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(true);
    })

    it('should return true for an array with two elements',() => {
        const inputArr = [1, 1];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(true);
    })

    it('should return false for an array with two different elements',() => {
        const inputArr = [1, 2];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(false);
    })

    it('should return true for an array with three symmetric elements', () => {
        const inputArr = [1, 2, 1];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(true);
    })

    it('should return false for an array with three non-symmetric elements',() => {
        const inputArr = [1, 2, 3];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(false);
    })

    it('should return true for an array with four symmetric elements',() => {
        const inputArr = [1, 2, 2, 1];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(true);
    })

    it('should return false for an array with four non-symmetric elements', function () {
        const inputArr = [1, 2, 3, 4];
        const result = checkForSymmetry(inputArr);
        expect(result).to.equal(false);
    })
});

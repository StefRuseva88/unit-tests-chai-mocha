import { sumNum } from './sumNum.js';
import { expect } from 'chai';

describe('The function sumNum', () => {
    it('should return 0 for an empty array', () => {
        const inputArr = [];   
        const result = sumNum(inputArr);
        expect(result).to.equal(0);
    });

    it('should return the correct sum for positive numbers', () => {
        const inputArr = [1, 2, 3];   
        const result = sumNum(inputArr);
        expect(result).to.equal(6);
    });

    it('should return the correct sum for negative numbers', () => {
        const inputArr = [-1, -2, -3];   
        const result = sumNum(inputArr);
        expect(result).to.equal(-6);
    });

    it('should return the correct sum for a mix of positive and negative numbers', () => {
        const inputArr = [-1, 2, -3];   
        const result = sumNum(inputArr);
        expect(result).to.equal(-2);
    });

    it('should return the correct sum for an array of one element', () => {
        const inputArr = [5];   
        const result = sumNum(inputArr);
        expect(result).to.equal(5);
    });
});

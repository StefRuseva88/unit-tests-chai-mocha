import { isOddOrEven } from './isOddOrEven.js';
import { expect } from 'chai';

describe('The function isOddOrEven', () => {

it('should return undefined when passed non string value parameter as input', () => {
//arrange
const inputvalueNum = 5;
const inputvalueUndefined = undefined;
const inputvalueArray = [];
const inputvalueNull = null;
const inputvalueFloatNum = 5.5;
//act
const resultNum = isOddOrEven(inputvalueNum);
const resultUndefined = isOddOrEven(inputvalueUndefined);
const resultArray = isOddOrEven(inputvalueArray);
const resultNull = isOddOrEven(inputvalueNull);
const resultFloatNum = isOddOrEven(inputvalueFloatNum);
//assert
expect(resultNum).to.equal(undefined);
expect(resultUndefined).to.equal(undefined);
expect(resultArray).to.equal(undefined);
expect(resultNull).to.equal(undefined);
expect(resultFloatNum).to.equal(undefined);
});

it('should return even for a string with even length', () => {
    const input = 'even';
    const result = isOddOrEven(input);
    expect(result).to.equal('even');

});

it('should return odd for a string with odd length', () => {
    const input = 'odd';
    const result = isOddOrEven(input);
    expect(result).to.equal('odd');

})
it('should return even for an empty string', () => {
    const input = '';
    const result = isOddOrEven(input);
    expect(result).to.equal('even');

});

});
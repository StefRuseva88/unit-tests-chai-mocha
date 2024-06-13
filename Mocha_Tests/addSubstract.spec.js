import { addSubstract } from './addSubstract.js';
import { expect } from 'chai';

describe('The function addSubstract', () => {
    it('Should return 0 when no operations are executed', () => {
        const calculator = addSubstract();
        const result = calculator.get();
        expect(result).to.equals(0);
    });
    
    it('Should return -1 when substracting 1 from 2', () => {
        const calculator = addSubstract();
        calculator.add(2);
        calculator.substract(1);
        const result = calculator.get();
        expect(result).to.equals(1);
    });

    it('Should return 0 when adding 1 and -1', () => {
        const calculator = addSubstract();
        calculator.add(1);
        calculator.add(-1);
        const result = calculator.get();
        expect(result).to.equals(0);
    });

    it('Should return 0 when substracting 1 from 1', () => {
        const calculator = addSubstract();
        calculator.add(1);
        calculator.substract(1);
        const result = calculator.get();
        expect(result).to.equals(0);
    });

    it('Should return 0 when adding 0 and 0', () => {
        const calculator = addSubstract();
        calculator.add(0);
        calculator.add(0);
        const result = calculator.get();
        expect(result).to.equals(0);
    });

    it('Should return 0 when substracting 0 from 0', () => {
        const calculator = addSubstract();
        calculator.add(0);
        calculator.substract(0);
        const result = calculator.get();
        expect(result).to.equals(0);
    });

    it('Should return 0 when adding 0 and 0', () => {
        const calculator = addSubstract();
        calculator.add(0);
        calculator.add(0);
        const result = calculator.get();
        expect(result).to.equals(0);
    });
});
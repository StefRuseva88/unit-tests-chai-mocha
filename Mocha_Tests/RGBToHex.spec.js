import {RGBToHex} from './RGBToHex.js'; 
import { expect } from 'chai';


describe('rgbToHexColor function', function () {
    it('should convert valid RGB values to hexadecimal color', () => {
        const result = RGBToHex(255, 255, 255);
        expect(result).to.equal('#FFFFFF');
    });

    it('should return undefined for invalid red values', () => {
        const result = RGBToHex('invalid', 0, 0);
        expect(result).to.be.undefined;
    });

    it('should return undefined for invalid green values', () => {
            const result = RGBToHex(0, 'invalid', 0);
            expect(result).to.be.undefined;
    });

    it('should return undefined for invalid blue values', () => {
        const result = RGBToHex(0, 0, 'invalid');
        expect(result).to.be.undefined;
    });

    it('should return undefined for non-integer values', () => {
        const result = RGBToHex(0.5, 0, 0);
        expect(result).to.be.undefined;
    });

    it('should return undefined for missing or extra arguments', () => {
        const result = RGBToHex(0, 0);
        expect(result).to.be.undefined;
    });
});


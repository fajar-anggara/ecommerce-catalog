import { getPrice } from '../../formats/formatPrice';

describe('Test Rating Formatting', () => {
    describe('decimalRatingTest', () => {
        test('should return USD format price when given any decimal and non decimal price', () => {
            expect(getPrice(1)).toBe("$1.00")
            expect(getPrice(2.3)).toBe("$2.30")
            expect(getPrice(3.33)).toBe("$3.33")
            expect(getPrice(3.53535353)).toBe("$3.54")
            expect(getPrice("invalid")).toBe("$0.00")
        })
    })
})
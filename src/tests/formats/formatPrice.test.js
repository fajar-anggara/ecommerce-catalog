import { price } from '../../formats/formatPrice';

describe('Test Rating Formatting', () => {
    describe('decimalRatingTest', () => {
        test('should return USD format price when given any decimal and non decimal price', () => {
            expect(price(1)).toBe("$1.00")
            expect(price(2.3)).toBe("$2.30")
            expect(price(3.33)).toBe("$3.33")
            expect(price(3.53535353)).toBe("$3.54")
            expect(price("invalid")).toBe("$0.00")
        })
    })
})
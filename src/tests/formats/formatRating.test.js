import { rating } from '../../formats/formatRating';

const apiRating = value => {
    return {
        rate: value
    }
}
describe('Test Rating Formatting', () => {
    describe('decimalRatingTest', () => {
        test('should return one decimal rating when given any decimal or non decimal rating number', () => {
            expect(rating(apiRating(4.567)).rate).toBe("4.6/5")
            expect(rating(apiRating(3.14)).rate).toBe("3.1/5")
            expect(rating(apiRating(5)).rate).toBe("5.0/5")
            expect(rating(apiRating(0)).rate).toBe("0.0/5")
            expect(rating(apiRating("invalid")).rate).toBe("0.0/5")
        })
    })

    describe('starRatingTest', () => {
        test('should return 0-5 star value when given any rating', () => {
            expect(rating(apiRating(4.567)).star).toBe(5)
            expect(rating(apiRating(3.14)).star).toBe(3)
            expect(rating(apiRating(5)).star).toBe(5)
            expect(rating(apiRating(0)).star).toBe(0)
            expect(rating(apiRating("invalid")).star).toBe(0)
        })
    })
})
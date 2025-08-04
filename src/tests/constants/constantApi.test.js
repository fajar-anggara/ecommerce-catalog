import { API_CONSTANTS } from "../../constants/constantApi"; // Ganti path sesuai lokasi aslinya

describe("API_CONSTANTS", () => {
    test("should contain correct BASE_URL string", () => {
        expect(API_CONSTANTS.BASE_URL).toBe("https://fakestoreapi.com/products")
    })

    test("should have MAX_PRODUCT_INDEX equal to 20", () => {
        expect(API_CONSTANTS.MAX_PRODUCT_INDEX).toBe(20)
    })

    test("should have MIN_PRODUCT_INDEX equal to 1", () => {
        expect(API_CONSTANTS.MIN_PRODUCT_INDEX).toBe(1)
    })

    test("should contain exactly 3 keys", () => {
        expect(Object.keys(API_CONSTANTS).length).toBe(3)
    })

    test("MAX_PRODUCT_INDEX should be greater than MIN_PRODUCT_INDEX", () => {
      expect(API_CONSTANTS.MAX_PRODUCT_INDEX).toBeGreaterThan(
        API_CONSTANTS.MIN_PRODUCT_INDEX
      )
    })
    
});

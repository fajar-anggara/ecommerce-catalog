import ProductService from "../../services/productService"
import { API_CONSTANTS } from "../../constants/constantApi"

global.fetch = jest.fn();

describe("ProductService", () => {
  beforeEach(() => {
      fetch.mockClear();
      jest.spyOn(console, "error").mockImplementation(() => {});
  })

  describe("isValidIndex", () => {
    test("should return true for index within range", () => {
      expect(ProductService.isValidIndex(5)).toBe(true)
    });

    test("should return false for index below minimum", () => {
      expect(ProductService.isValidIndex(0)).toBe(false)
    });

    test("should return false for index above maximum", () => {
      expect(ProductService.isValidIndex(21)).toBe(false)
    })
  })

  describe("resetIndex", () => {
    test("should return MIN_PRODUCT_INDEX if index > MAX_PRODUCT_INDEX", () => {
      expect(ProductService.resetIndex(99)).toBe(
        API_CONSTANTS.MIN_PRODUCT_INDEX
      )
    })

    test("should return MAX_PRODUCT_INDEX if index < MIN_PRODUCT_INDEX", () => {
      expect(ProductService.resetIndex(0)).toBe(
        API_CONSTANTS.MAX_PRODUCT_INDEX
      )
    })

    test("should return original index if within range", () => {
      expect(ProductService.resetIndex(10)).toBe(10);
    })
  })

  describe("fetchProducts", () => {
    test("should return product data when response is ok", async () => {
      const mockData = { id: 1, title: "Test Product" };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      })

      const result = await ProductService.fetchProducts(1);
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith(`${API_CONSTANTS.BASE_URL}/1`);
    })

    test("should throw error when response is not ok", async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 404 });

      await expect(ProductService.fetchProducts(99)).rejects.toThrow(
        "HTTP error, status: 404"
      )
    })

    test("should throw error on network failure", async () => {
      fetch.mockRejectedValueOnce(new Error("Network down"));

      await expect(ProductService.fetchProducts(3)).rejects.toThrow(
        "Network down"
      )
    })
  })
})

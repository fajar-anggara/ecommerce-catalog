import { API_CONSTANTS } from "../constants/constantApi";

class ProductService {
  static async fetchProducts(index) {
    try {
      const response = await fetch(`${API_CONSTANTS.BASE_URL}/${index}`);

      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch product, error: ${error}`);
      throw error;
    }
  }

  static isValidIndex(index) {
    return (
      index >= API_CONSTANTS.MIN_PRODUCT_INDEX &&
      index <= API_CONSTANTS.MAX_PRODUCT_INDEX
    );
  }

  static resetIndex(index) {
    if (index > API_CONSTANTS.MAX_PRODUCT_INDEX) {
      return API_CONSTANTS.MIN_PRODUCT_INDEX;
    }
    if (index < API_CONSTANTS.MIN_PRODUCT_INDEX) {
      return API_CONSTANTS.MAX_PRODUCT_INDEX;
    }
    return index;
  }
}

export default ProductService;

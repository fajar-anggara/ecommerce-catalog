import { PRODUCT_CATEGORIES, DISPLAY_CATEGORIES } from "../../constants/constantCategory";

describe("PRODUCT_CATEGORIES", () => {
  test("should contain correct keys and values", () => {
    expect(PRODUCT_CATEGORIES).toEqual({
      MENS_CLOTHING: "men's clothing",
      WOMENS_CLOTHING: "women's clothing",
    });
  });

  test("should not contain unexpected categories", () => {
    expect(Object.keys(PRODUCT_CATEGORIES)).toEqual([
      "MENS_CLOTHING",
      "WOMENS_CLOTHING",
    ]);
  });
});

describe("DISPLAY_CATEGORIES", () => {
  test("should contain all display categories including UNAVAILABLE", () => {
    expect(DISPLAY_CATEGORIES).toEqual({
      MENS_CLOTHING: "MENS_CLOTHING",
      WOMENS_CLOTHING: "WOMENS_CLOTHING",
      UNAVAILABLE: "UNAVAILABLE",
    });
  });

  test("should include UNAVAILABLE key", () => {
    expect(DISPLAY_CATEGORIES.UNAVAILABLE).toBe("UNAVAILABLE");
  });
});

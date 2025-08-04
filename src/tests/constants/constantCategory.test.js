import { PRODUCT_CATEGORIES, DISPLAY_CATEGORIES } from "../../constants/constantCategory";

describe("PRODUCT_CATEGORIES", () => {
  test("should contain correct keys and values", () => {
    expect(PRODUCT_CATEGORIES).toEqual({
      MENS_CLOTHING: "MENS_CLOTHING",
      WOMEN_CLOTHING: "WOMEN_CLOTHING",
    });
  });

  test("should not contain unexpected categories", () => {
    expect(Object.keys(PRODUCT_CATEGORIES)).toEqual([
      "MENS_CLOTHING",
      "WOMEN_CLOTHING",
    ]);
  });
});

describe("DISPLAY_CATEGORIES", () => {
  test("should contain all display categories including UNAVAILABLE", () => {
    expect(DISPLAY_CATEGORIES).toEqual({
      MENS_CLOTHING: "MENS_CLOTHING",
      WOMEN_CLOTHING: "WOMEN_CLOTHING",
      UNAVAILABLE: "UNAVAILABLE",
    });
  });

  test("should include UNAVAILABLE key", () => {
    expect(DISPLAY_CATEGORIES.UNAVAILABLE).toBe("UNAVAILABLE");
  });
});

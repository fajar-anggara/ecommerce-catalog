import { toDisplay } from "../../services/categoryMapper"
import {
  PRODUCT_CATEGORIES,
  DISPLAY_CATEGORIES,
} from "../../constants/constantCategory"

describe("toDisplay", () => {
  test("should convert mens clothing category to display name", () => {
    expect(toDisplay(PRODUCT_CATEGORIES.MENS_CLOTHING)).toBe(
      DISPLAY_CATEGORIES.MENS_CLOTHING
    )
  })

  test("should convert women clothing category to display name", () => {
    expect(toDisplay(PRODUCT_CATEGORIES.WOMEN_CLOTHING)).toBe(
      DISPLAY_CATEGORIES.WOMEN_CLOTHING
    )
  })

  test("should return UNAVAILABLE for unknown category", () => {
    expect(toDisplay("electronics")).toBe(DISPLAY_CATEGORIES.UNAVAILABLE)
  })

  test("should return UNAVAILABLE for null input", () => {
    expect(toDisplay(null)).toBe(DISPLAY_CATEGORIES.UNAVAILABLE)
  })

  test("should return UNAVAILABLE for undefined input", () => {
    expect(toDisplay(undefined)).toBe(DISPLAY_CATEGORIES.UNAVAILABLE)
  })
})

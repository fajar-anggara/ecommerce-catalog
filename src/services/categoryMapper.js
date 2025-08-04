import {
  PRODUCT_CATEGORIES,
  DISPLAY_CATEGORIES,
} from "../constants/constantCategory";

export const toDisplay = (categoryFromApi) => {
  const categoryMatch = {
    [PRODUCT_CATEGORIES.MENS_CLOTHING]: DISPLAY_CATEGORIES.MENS_CLOTHING,
    [PRODUCT_CATEGORIES.WOMEN_CLOTHING]: DISPLAY_CATEGORIES.WOMEN_CLOTHING,
  };

  return categoryMatch[categoryFromApi] || DISPLAY_CATEGORIES.UNAVAILABLE;
};

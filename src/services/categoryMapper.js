import {
  PRODUCT_CATEGORIES,
  DISPLAY_CATEGORIES,
} from "@/constants/constantCategory";

export const toDisplay = (categoryFromApi) => {
  const categoryMatch = {
    [PRODUCT_CATEGORIES.MENS_CLOTHING]: DISPLAY_CATEGORIES.MENS_CLOTHING,
    [PRODUCT_CATEGORIES.WOMENS_CLOTHING]: DISPLAY_CATEGORIES.WOMENS_CLOTHING,
  };

  return categoryMatch[categoryFromApi] || DISPLAY_CATEGORIES.UNAVAILABLE;
};

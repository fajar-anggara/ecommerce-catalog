# ProductDisplay Component

Aplikasi Vue.js untuk menampilkan katalog product men's clothing dan woman's clothing

## Features

- Display product information (title, description, price, rating, category)
- Skeleton loading animation when fetching data
- Next product navigation
- Unavailable page for unavailable products
- Responsive product card layout
- Star rating display

## Usage

```vue
<template>
  <ProductDisplay />
</template>

<script>
import ProductDisplay from '@/components/ProductDisplay.vue'

export default {
  components: {
    ProductDisplay
  }
}
</script>
```

## Dependencies

### Services
- `ProductService` - Fetching products from external API Endpoint
- `categoryMapper` - Convert product category to classable category name

### Formatters
- `formatPrice` - Standardize price display format
- `formatRating` - Standardize rating format by rounding the rating

### Constants
- `constantCategory` - Category display constants
- `constantApi` - API configuration constants

## Component Structure

```
ProductDisplay/
├── Available Product View
│   ├── Product Image
│   ├── Product Info (title, category, rating)
│   ├── Description
│   └── Actions (price, buy button, next button)
└── Unavailable Product View
    ├── Not Found Icon
    ├── Error Message
    └── Navigation Button
```

## States

- **Loading**: Shows skeleton loading animation
- **Available**: Displays product data
- **Unavailable**: Shows unavailable page

## API Integration

The component expects your `ProductService.fetchProducts()` to return:

```javascript
{
    "id",
    "title",
    "price",
    "description",
    "category",
    "image",
    "rating": {
        "rate",
        "count"
    }
}
```
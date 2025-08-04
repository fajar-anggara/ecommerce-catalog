<script>
import ProductService from "@/services/productService"
import { getPrice } from "@/formats/formatPrice"
import { getRating } from '@/formats/formatRating'
import { toDisplay } from '@/services/categoryMapper'
import { DISPLAY_CATEGORIES } from '@/constants/constantCategory'
import { API_CONSTANTS } from "@/constants/constantApi";

export default {
  name: "ProductDisplay",
  data() {
    return {
      currentIndex: API_CONSTANTS.MIN_PRODUCT_INDEX,
      currentProduct: null,
      displayCategory: DISPLAY_CATEGORIES.UNAVAILABLE,
      rating: {
        rate: '0/5',
        star: 0
      },
      price: '$0.00',
      loading: false,
      error: null,
    }
  },

  computed: {
    categoryDisplayClass() {
      return this.displayCategory
    },

    isProductAvailable() {
      return this.displayCategory !== DISPLAY_CATEGORIES.UNAVAILABLE && this.currentProduct
    }
  },

  methods: {
    async nextProducts() {
      this.loading = true
      this.error = null

      try {
        const data = await ProductService.fetchProducts(this.currentIndex)
        this.currentProduct = data
        this.displayCategory = toDisplay(data.category)
        this.rating = getRating(data.rating)
        this.price = getPrice(data.price)
      }
      catch (err) {
        console.error('Error fetching product:', err)
        this.error = 'Failed to load product'
        this.displayCategory = DISPLAY_CATEGORIES.UNAVAILABLE
      }
      finally {
        this.loading = false
      }

      this.nextIndex()
    },

    nextIndex() {
      this.currentIndex = ProductService.resetIndex(this.currentIndex + 1)
    },
  },

  async mounted() {
    await this.nextProducts()
  }
}
</script>

<template>
  <div class="background" :class="categoryDisplayClass">
    <div
        v-if="isProductAvailable || loading"
        class="center-wrapper"
        :class="{ 'skeleton-loading': loading }"
        id="available-product"
    >
      <div class="product-card">
        <div class="image-section">
          <img
              :src="currentProduct?.image || ''"
              :alt="currentProduct?.title || ''"
              class="product-image"
          />
        </div>

        <div class="info-sections">
          <div class="content-area">
            <div class="title-rating-section">
              <h2 class="product-title">
                {{ currentProduct?.title || '' }}
              </h2>
              <div class="meta-row">
                <span class="category">
                  {{ currentProduct?.category || '' }}
                </span>
                <div class="rating">
                  <span class="rating-value">
                    {{ rating.rate }}
                  </span>
                  <div class="stars">
                    <span
                        v-for="n in 5"
                        :key="n"
                        :class="['circle', n <= rating.star ? 'filled' : 'empty']">
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="description-section">
              <p class="description">
                {{ currentProduct?.description || '' }}
              </p>
            </div>
          </div>

          <div class="action-section">
            <p class="price">
              {{ price }}
            </p>
            <div class="actions">
              <button class="buy-now">Buy now</button>
              <button
                  class="next-product"
                  @click="nextProducts()"
                  :disabled="loading"
              >
                Next product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Unavailable Product -->
    <div
        v-else
        class="center-wrapper"
        id="unavailable-product"
    >
      <div class="product-card unavailable-card">
        <div class="unavailable-overlay">
          <img
              src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
              alt="Page Not Found"
              class="not-found-icon"
          />
          <div class="unavailable-text">
            {{ error || 'This product unavailable to show' }}
          </div>
          <div class="unavailable-buttons">
            <button
                class="buy-now"
                @click="nextProducts()"
                :disabled="loading"
            >
              Next product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/style/page.css";
</style>
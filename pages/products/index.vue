<template>
  <div class="products-page">
    <h1>Product Catalog</h1>

    <div v-if="pending" class="loading">
      Loading products...
    </div>

    <div v-else-if="error" class="error">
      Error: {{ error.message }}
    </div>

    <div v-else>
      <section class="filters-bar">
        </section>

      <div class="products-grid">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

/**
 * DATA FETCHING
 */
const { data: products, pending, error } = await useFetch<Product[]>('/api/products')

/**
 * FILTERING LOGIC
 */
// const { ... } = useProductFilters(...)

/**
 * COMPUTED PROPERTIES
 */
const categories = computed(() => {
  return []
})
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

/* HELPFUL STYLES FOR THE CANDIDATE 
*/

.filters-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  align-items: flex-end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: bold;
  font-size: 0.9rem;
}

.filter-group input, 
.filter-group select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.loading, .error {
  padding: 4rem;
  text-align: center;
  font-size: 1.2rem;
}

.error { color: #d32f2f; }
</style>
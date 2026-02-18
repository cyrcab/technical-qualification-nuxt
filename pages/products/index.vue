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
        <section section class="filters-bar">
          <div class="filter-container">
            <span @click="filterBy('price')"> Par Prix </span>
            <span @click="filterBy('category')"> Par catégorie </span>
            <span @click="filterBy('inStock')"> En Stock </span>
          </div>
          <div class="sort-container">
            <span @click="sortBy('price')"> Price </span>
            <span @click="sortBy('rating')"> Rating </span>
          </div>  
    
        </section>

      <div class="products-grid">
        <div v-for="{ name, category, price, inStock, rating } in filteredProducts" class="product">
          <span>Nom :  {{ name }}</span> - 
          <span>Category {{ category }}</span>
          <span>Prix :  {{ price }}</span>
          <span> En stock :  {{ inStock  ? 'Oui' : 'Non' }}</span>
          <span> Note : {{ rating }}</span>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
import { useProductFilters } from '~/composables/useProductFilters'

const route = useRoute()
const router = useRouter()

const filterOptions = ['search', 'category', 'inStock', 'price'];
function filterBy(option: string) {

  if(filterOptions.includes(option)) {
    const val =  route.query[option] && route.query[option] == '1'  ? 0 : 1
    router.replace({ query: {...route.query, [option]: val } })
  }
}

/**
 * DATA FETCHING
 */

 const { data: products, pending, error } = await useFetch<Product[]>('/api/products')
  console.log(products.value)
  const {filteredProducts}  = useProductFilters(products);
  console.log("sa", filteredProducts.value)





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
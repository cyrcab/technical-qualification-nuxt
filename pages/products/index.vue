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
          <div class="filter-group">
            <label for="search"> Search </label>
            <input v-model="search" id="search">
          </div>  
          <div class="filter-group">
              
              <label for="category" class="categories">
                Par catégorie
              </label>
              <select v-model="category" name="category" id="category">
                <option value=""> Tout </option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
            
          </div>
          <div class="filter-group">
            <label for="sortBy" class="categories">
                Trier par
              </label>
              <select v-model="sortBy" name="category" id="sortBy">
                <option value="price-asc">Prix Croissant</option>
                <option value="price-desc">Prix Décroissant</option>
                <option value="rating-asc">Note Croissant</option>
                <option value="rating-desc">Note Décroissant</option>
              </select>
          </div> 
          <div class="filter-group">
            <label for="inStock"> En Stock </label>
            <input v-model="inStockOnly" type="checkbox" id="inStock">
          </div>  
    
        </section>

      <div class="products-grid">
        <NuxtLink v-for="prd in filteredProducts" class="product"
          :to="{name: 'products-id', params: { id: prd.id }}"
          tag="div">
          <p>Nom :  {{ prd.name }}</p>
          <p>Category : {{ prd.category }}</p>
          <p>Prix :  {{ prd.price }}</p>
          <p> En stock :  {{ prd.inStock  ? 'Oui' : 'Non' }}</p>
          <p> Note : {{ prd.rating }}</p>
        </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
import { useProductFilters } from '~/composables/useProductFilters'


/**
 * DATA FETCHING
 */

const { data: products, pending, error } = await useFetch<Product[]>('/api/products')

/**
 * FILTERING LOGIC
 */
 const {
    search,
    category,
    inStockOnly,
    sortBy,
    filteredProducts }  = useProductFilters(products);

/**
 * COMPUTED PROPERTIES
 */

const categories = computed(() => {
  const arr = products.value?.map(prd => prd.category);
  return [...new Set(arr)]
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
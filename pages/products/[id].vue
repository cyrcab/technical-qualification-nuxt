<template>
  <div class="product-detail">
    <div v-if="product" class="product-card-large">
      <NuxtLink class="back-link" :to="{ name: 'products' }">Back</NuxtLink>

      <div class="product-header">
        <h1>{{ product.name }}</h1>
        </div>

      <div class="product-grid-info">
          <p>Category : {{ product.category }}</p>
          <p>Prix :  {{ product.price }}</p>
          <p class="status-badge"> En stock :  {{ product.inStock  ? 'Oui' : 'Non' }}</p>
          <p> Note : {{ product.rating }}</p>
        </div>
      
      <pre class="debug-data">{{ product }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

/**
 * ROUTE & PARAMS
 * TODO: Extract and validate the product ID from the route parameters.
 */
const route = useRoute()

/**
 * DATA FETCHING
 * TODO: Retrieve the product data.
 */
const { data: products, pending } = await useFetch<Product[]>('/api/products')


/**
 * PRODUCT SELECTION & ERROR HANDLING
 * TODO:
 * 1. Find the specific product matching the ID.
 * 2. If the product does not exist, trigger a Nuxt 404 error page.
 */
  function getProduct(id: string | number) {
    return products?.value?.find((prd: Product) => prd.id == id)

  }
  const exist = getProduct(route.params.id as string)

  if(!exist) {
    throw createError({ status: 404, statusText: 'Ce produit n\'existe pas' })
  }
  const product = computed(() => {
    return getProduct(route.params.id as string)
  })
</script>

<style scoped>
.product-detail {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: sans-serif;
}

/* HELPFUL STYLES FOR THE CANDIDATE */

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: #2563eb;
  text-decoration: none;
}

.product-card-large {
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.product-grid-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.status-badge {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.debug-data {
  background: #f4f4f4;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 4px;
  margin-top: 2rem;
}
</style>
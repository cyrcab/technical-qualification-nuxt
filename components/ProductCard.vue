<template>
  <div class="product-card">
    <pre class="debug-data">{{ product }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

/**
 * PROPS DEFINITION
 */
defineProps<{
  product: Product
}>()
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: white;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* HELPFUL UTILITY CLASSES FOR THE CANDIDATE */

.product-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #111827;
}

.price-tag {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2563eb;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.in-stock {
  background-color: #d1fae5;
  color: #065f46;
}

.out-of-stock {
  background-color: #fee2e2;
  color: #991b1b;
}

.debug-data {
  margin-top: auto;
  font-size: 0.7rem;
  color: #9ca3af;
  background: #f9fafb;
  padding: 0.5rem;
}
</style>
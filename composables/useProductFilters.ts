import type { Product, SortOption } from '~/types/product'

export const useProductFilters = (products: ComputedRef<Product[]>) => {
  const route = useRoute()
  const router = useRouter()

  /**
   * 1. STATE INITIALIZATION
   * TODO: Initialize these refs. 
   * Senior Level: Try to initialize them from 'route.query' to maintain 
   * state on page refresh (Deep Linking).
   */
  const search = ref('')
  const category = ref('')
  const inStockOnly = ref(false)
  const sortBy = ref<SortOption>('price-asc')

  /**
   * 2. FILTERING & SORTING LOGIC
   * TODO: Implement the computation logic.
   * - Filter by name (case-insensitive, bonus: handle accents/special chars).
   * - Filter by category.
   * - Filter by stock availability.
   * - Sort by price (asc/desc) and rating (desc).
   * * Note: Ensure you don't mutate the original source.
   */
  const filteredProducts = computed(() => {
    // Candidate implementation
    return products.value
  })

  /**
   * 3. URL SYNCHRONIZATION
   * TODO: Sync the state with the URL query parameters.
   * Senior Level: Use 'router.replace' to update the URL without 
   * polluting the browser history. Handle empty values properly.
   */
  watch([search, category, inStockOnly, sortBy], () => {
    // Candidate implementation
  })

  return {
    search,
    category,
    inStockOnly,
    sortBy,
    filteredProducts
  }
}
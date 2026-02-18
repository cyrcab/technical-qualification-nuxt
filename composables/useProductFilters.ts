import type { Product, SortOption } from '~/types/product'
import { SORT_OPTIONS, DEF_SORT } from '~/types/product';

function getSortBy(val: any) : SortOption {
   return val && SORT_OPTIONS.includes(val) ? val : DEF_SORT
}

export const useProductFilters = (products: Ref<Product[]>) => {
  const route = useRoute()
  const router = useRouter()

  /**
   * 1. STATE INITIALIZATION
   * TODO: Initialize these refs. 
   * Senior Level: Try to initialize them from 'route.query' to maintain 
   * state on page refresh (Deep Linking).
   */

  const search = ref(route.query.search as string || '')
  const category = ref(route.query.category as string || '')
  const inStockOnly = ref(!!route.query.inStockOnly || false)
  const sortBy = ref<SortOption>(getSortBy(route.query.sortBy as string))

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

    let res = products.value;

    if(search.value) {
      const reg = new RegExp(search.value,'i')
      res = res.filter(({ name }: Product) => reg.test(name))
    }
    if(category.value) {
      res = res.filter(({ category: cty }: Product) => cty === category.value)
    }

    if(inStockOnly.value === true) res = res.filter(({ inStock }: Product) => inStock === true)

    return [...res].sort((a: Product, b: Product) => {
      switch(sortBy.value) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating-asc':
          return a.rating - b.rating
        case 'rating-desc':
          return b.rating - a.rating
        default:
          return a.price - b.price
      }
    })
  })

  /**
   * 3. URL SYNCHRONIZATION
   * TODO: Sync the state with the URL query parameters.
   * Senior Level: Use 'router.replace' to update the URL without 
   * polluting the browser history. Handle empty values properly.
   */
  watch([search, category, inStockOnly, sortBy], () => {

    const query = {
      search: search.value || undefined,
      category: category.value || undefined,
      inStockOnly: inStockOnly.value ? 'true' : undefined,
      sortBy: sortBy.value || undefined
    }
    router.replace({ query })
  })

  return {
    search,
    category,
    inStockOnly,
    sortBy,
    filteredProducts
  }
}
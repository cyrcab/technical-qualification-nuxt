import type { Product, SortOption } from '~/types/product'

export const DEF_SORT: SortOption = 'price-asc';

function getSortBy(val: any) : SortOption {
   return val || DEF_SORT
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
  const search = ref(route.query.search || '')
  const category = ref(route.query.category || '')
  const inStockOnly = ref(route.query.inStockOnly || 0)
  const sortBy = ref<SortOption>(getSortBy(route.query.sortBy as string)) //TODO fix ts sortoption vs string

  /**
   * 2. FILTERING & SORTING LOGIC
   * TODO: Implement the computation logic.
   * - Filter by name (case-insensitive, bonus: handle accents/special chars).
   * - Filter by category.
   * - Filter by stock availability.
   * - Sort by price (asc/desc) and rating (desc).
   * * Note: Ensure you don't mutate the original source.
   */

  function normalize(str : string) {
    return str;
  }
  const filteredProducts = computed(() => {

    let filtered = products.value;

    //if(search.value) filtered = filtered.filter(({name}: Product) => normalize(name) === normalize(search.value))
    //if(category.value) filtered = filtered.filter(({category: cty}: Product) => normalize(cty) === normalize(category.value))

    if(inStockOnly.value == true) filtered = filtered.filter((prd: Product) => prd.inStock === true)

      console.log("sa 2", filtered);

    return [...filtered].sort((a: Product, b: Product) => {
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
  watch(route, () => {
    search.value = route.query.search || '';
    category.value = route.query.category || '';
    inStockOnly.value = route.query.inStock || 0;
    sortBy.value = getSortBy(route.query.sortBy) || DEF_SORT;
  })

  return {
    search,
    category,
    inStockOnly,
    sortBy,
    filteredProducts
  }
}
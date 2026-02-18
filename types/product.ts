export interface Product  {
    id:  number,
    name: string,
    category: string,
    price: number,
    inStock: boolean,
    rating: number
  }


export const SORT_OPTIONS = [
  "price-asc",
  "price-desc",
  "rating-asc",
  "rating-desc",
] as const;
  
export type SortOption = typeof SORT_OPTIONS[number];


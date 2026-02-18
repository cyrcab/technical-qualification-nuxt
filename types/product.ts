export interface Product  {
    id:  number,
    name: string,
    category: string,
    price: number,
    inStock: boolean,
    rating: number
  }

export type SortOption = "price-asc" | "price-desc" | "rating-asc" | "rating-desc";

export const SORT_OPTIONS: SortOption[] = [
  "price-asc",
  "price-desc",
  "rating-asc",
  "rating-desc",
];
export const DEF_SORT: SortOption = "price-asc";


Technical Assessment: Nuxt 3 Product Catalog

## Goal
Build a functional, performant, and well-architected Product Catalog using Nuxt 3. You are provided with a bare-bones starter kit including an API mock, basic styling utilities, and file structure.

## Tech Stack
- Framework: Nuxt 3 (Vue 3, Script Setup)
- Language: TypeScript
- Data fetching: Nuxt `useFetch` / `useAsyncData`

## Requirements

### 1) Product listing (`/products`)
- Fetch products from the provided `/api/products` endpoint.
- Display products in a responsive grid using the `ProductCard` component.

**Filtering system**
- Search: case-insensitive text search on product names.
- Category: filter by category using a dynamic dropdown.
- Availability: toggle to show "In Stock" items only.
- Sorting: implement sorting by Price (Asc/Desc) and Rating (Desc).

### 2) Product details (`/products/[id]`)
- Implement a dynamic route to display full product information.
- Handle 404 errors gracefully if a product ID does not exist.
- Ensure navigation back to the catalog is seamless.

### 3) State management & architecture
- Composable: all filtering and sorting logic must reside in [composables/useProductFilters.ts](composables/useProductFilters.ts).
- Deep linking (bonus): synchronize filter state with URL query parameters (e.g., `?q=phone&sort=price-asc`). State should persist on page refresh.

## Provided Structure
- [server/api/products.ts](server/api/products.ts): mock API returning product data.
- [types/product.ts](types/product.ts): TypeScript interfaces.
- [components/ProductCard.vue](components/ProductCard.vue): UI component for catalog items (styles provided).
- [composables/useProductFilters.ts](composables/useProductFilters.ts): skeleton for your business logic.

## Getting Started
```bash
npm install
npm run dev
```

The catalog should be accessible at http://localhost:3000/products.

Good luck! You have 45-60 minutes to complete the core requirements.
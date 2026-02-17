Technical Assessment: Nuxt 3 Product Catalog
🎯 Goal
Build a functional, performant, and well-architected Product Catalog using Nuxt 3. You are provided with a "barebone" starter kit including an API mock, basic styling utilities, and file structures.

🛠 Tech Stack
Framework: Nuxt 3 (Vue 3, Script Setup)

Language: TypeScript

Data Fetching: Nuxt useFetch / useAsyncData

📋 Requirements
1. Product Listing (/products)
Fetch products from the provided /api/products endpoint.

Display products in a responsive grid using the ProductCard component.

Filtering System:

Search: Case-insensitive text search on product names.

Category: Filter by category using a dynamic dropdown.

Availability: Toggle to show "In Stock" items only.

Sorting: Implement sorting by Price (Asc/Desc) and Rating (Desc).

2. Product Details (/products/[id])
Implement a dynamic route to display full product information.

Handle 404 errors gracefully if a product ID does not exist.

Ensure navigation back to the catalog is seamless.

3. State Management & Architecture
Composable: All filtering and sorting logic must reside in composables/useProductFilters.ts.

Deep Linking (Bonus): Synchronize the filter state with the URL query parameters (e.g., ?q=phone&sort=price-asc). State should persist on page refresh.

🏗 Provided Structure
server/api/products.ts: Mock API returning product data.

types/product.ts: TypeScript interfaces.

components/ProductCard.vue: UI component for catalog items (styles provided).

composables/useProductFilters.ts: Skeleton for your business logic.

🚀 Getting Started
Install dependencies: npm install

Start the development server: npm run dev

The catalog should be accessible at http://localhost:3000/products

Good luck! You have 45-60 minutes to complete the core requirements.
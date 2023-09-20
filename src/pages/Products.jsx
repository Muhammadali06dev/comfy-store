import Filter from "../components/Filters"
import { ProductsContainer, PaginationContainer } from "../components"
import { customFetch } from "../utils"

const url = "/products"
export const loader = async ({ request }) => {
   const response = await customFetch(url)
   const products = response.data.data
   const meta = response.data.meta
   return { products, meta }
}

function Products() {
   return (
      <div>
         <Filter />
         <ProductsContainer />
         <PaginationContainer />
      </div>
   )
}

export default Products
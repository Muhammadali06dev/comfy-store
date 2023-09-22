import Filters from "../components/Filters"
import { ProductsContainer, PaginationContainer } from "../components"
import { customFetch } from "../utils"

const url = "/products"
export const loader = async ({ request }) => {
   console.log(request)
   const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
   ])
   const response = await customFetch(url, {
      params
   });
   const products = response.data.data;
   const meta = response.data.meta;
   return { products, params, meta };
};

function Products() {
   return (
      <section className="py-20">
         <Filters />
         <ProductsContainer />
         <PaginationContainer />
      </section>
   )
}

export default Products
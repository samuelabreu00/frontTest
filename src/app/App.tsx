import Header from '../components/header/Header'
import Products from '../components/productList/ProductList'
import Footer from '../components/footer/Footer'
import { CartProvider } from "../Context/cartContext"  
import { FilterContextProvider } from '../Context/filterContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}> 
    <CartProvider>
      <FilterContextProvider>
        <Header />
        <Products />
      </FilterContextProvider>  
      <Footer />
    </CartProvider>
  </QueryClientProvider>
  )
}

export default App;

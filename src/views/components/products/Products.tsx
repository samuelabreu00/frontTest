import styled from "styled-components"
import Items from "../items/Items"
import { useState , useEffect} from "react"
import { api } from "../../../axios/config"

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ContainerMain = styled.div`
    max-width: 938px;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 5rem 24px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.2rem;
`

interface Products {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
  }
  
const Products = () => {

    const [productList, setProductList] = useState<Products[]>([]);

    useEffect(() => {
        fetchProduct();
      }, []);
    
      async function fetchProduct() {
        try{
          const products = await api.getProducts();
        setProductList(products.products);
        }catch (error) {
          console.error("Erro ao obter produtos:", error)
        }
        
      } 

  return (
    <>
    <Main>
        <ContainerMain>
        {productList.map(product => (
        <div key={product.id}>
           <Items
            photo={product.photo}
            id={product.id}
            name={product.name}
            brand={product.brand} 
            description={product.description}
            price={product.price}/>
        </div>
      
      ))}
        </ContainerMain>
    </Main>
    </>
  )
}

export default Products
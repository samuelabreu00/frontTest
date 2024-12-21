import styled, { keyframes } from 'styled-components';
import Items from "../items/Items"
import { useState , useEffect} from "react"
import { api } from "../../../axios/config"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ContainerMain = styled.div`
    max-width: 1350px;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 5rem 24px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem 1.2rem;
`
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 1s infinite ease-in-out;
  font-size: 5rem; 
  color: #555; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Products {
    id: number;
    title: string;
    brand: string;
    description: string;
    price: number;
    image: string;
  }
  
const Products = () => {

    const [productList, setProductList] = useState<Products[]>([]);

    useEffect(() => {
  
        fetchProduct();
      }, []);
    
      async function fetchProduct() {
        try{
          const products = await api.getProducts();
        setProductList(products);
        }catch (error) {
          console.error("Erro ao obter produtos:", error)
        }
        
      } 

  return (
    <>
    <Main>
        <ContainerMain>
        
          {productList.length > 0 ? (
            productList.map((product) =>(
              <Items
                image={product.image}
                id={product.id}
                title={product.title}
                brand={product.brand}
                price={product.price}
              />
            ))
          ):(
            <LoadingIcon />
          )} 
        </ContainerMain>
    </Main>
    </>
  )
}

export default Products
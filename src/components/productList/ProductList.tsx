import styled, { keyframes } from 'styled-components';
import Items from "../products/Products";
import { useState , useEffect } from "react";
import { api } from "../../axios/config";
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';  
const Main = styled.main`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    gap: 3rem 1.8rem;
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
    try {
      const products = await api.getProducts();
      setProductList(products);
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
    }
  }

  return (
    <>
      <Main>
        <ContainerMain>
          {productList.length > 0 ? (

            productList.map((product) => (
              <Items
                key={product.id}
                image={product.image}
                id={product.id}
                title={product.title}
                brand={product.brand}
                price={product.price}
              />
            ))
          ) : (
            <>

              {[...Array(20)].map((_, index) => (
                <div key={index} style={{ width: '300px', minHeight: '280px' }}>
                  <Skeleton height={280} width={300} />
                  
                </div>
              ))}
            </>
          )}
        </ContainerMain>
      </Main>
    </>
  );
};

export default Products;

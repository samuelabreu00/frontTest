import styled from 'styled-components';
import Items from "../products/Products";
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';  
import { useProducts } from '../../Hooks/useProducts';


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
  price: number;
  image: string;
}

const Products = () => {
  const { data } = useProducts();

  if (!data) { 
    return (
      <Main>
        <ContainerMain>
          {[...Array(20)].map((_, index) => (
            <div key={index} style={{ width: '300px', minHeight: '280px' }}>
              <Skeleton height={280} width={300} />
            </div>
          ))}
        </ContainerMain>
      </Main>
    );
  }

  return (
    <Main>
      <ContainerMain>
        {data.map((product: Products) => (
          <Items
            key={product.id}
            image={product.image}
            id={product.id}
            title={product.title}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </ContainerMain>
    </Main>
  );
};

export default Products
import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import imgCart from "../../assets/Vector.svg";
import { CartContext } from "../../Context/cartContext";
import { useCart } from "../../Hooks/useCart";
import Cart from "../cart/Cart";
import SearchInput from "../searchInput/SearchInput";
import { useFilter } from "../../Hooks/useFilter";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
}
`;

const HeaderStyle = styled.header`
  background-color: #3a89ff;
  height: 101px;
  display: flex;
  justify-content: center;
`;

const ContainerHeader = styled.div`
  max-width: 1350px;
  padding: 0 24px;
  box-sizing: content-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
`;

const ContainerLogo = styled.div`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  @media (max-width: 500px) {
    display: none;
  }
`;

const ContainerCart = styled.div`
  background-color: #fff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 
`;

const ImgCart = styled.img`
  width: 19px;
  cursor: pointer;
`;

const NumberCart = styled.p`
  font-weight: 700;
`;

const Header: React.FC = () => {

  
  const {setSearch, search} = useFilter();
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;
  const { productsCart } = cartContext;
  const totalItems = productsCart.length;

  const { isCartVisible, handleOpenCart, handleCloseCart } = useCart();

  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <ContainerHeader>
          <ContainerLogo>Logo</ContainerLogo>

          <SearchInput
            value={search}
            handleChange={setSearch}
          /> 

          <ContainerCart onClick={handleOpenCart}>
            <ImgCart src={imgCart} alt="Carrinho" />
            <NumberCart>{totalItems}</NumberCart>
          </ContainerCart>
        </ContainerHeader>
      </HeaderStyle>
      {isCartVisible && <Cart handleCloseCart={handleCloseCart} />}

    </>
  );
};

export default Header;

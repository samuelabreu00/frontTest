import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import imgCart from "../../assets/Vector.svg";
import { CartContext } from "../../Context/cartContext";
import { useCart } from "../../Hooks/useCart";
import Cart from "../cart/Cart";
import { HiMagnifyingGlass } from "react-icons/hi2";

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
`;

const SearchLabel = styled.div`
width: 450px;
position: relative;
>input{
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 1rem;
  border-radius: 19px;
  border: none;
  outline: none;
  background-color: #e5e5e5;
}
>div{
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 53%;
  right: 15px;
  font-size: 20px;
  color: #545454;
  cursor: pointer;
}
`

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
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { productsCart } = cartContext;
  const totalItems = productsCart.reduce((total, product) => total + product.quantity, 0);

  const { isCartVisible, handleOpenCart, handleCloseCart } = useCart();

  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <ContainerHeader>
          <ContainerLogo>Logo</ContainerLogo>

          <SearchLabel><input type="text" placeholder="Pesquisar produto"/> <div><HiMagnifyingGlass /></div></SearchLabel>

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

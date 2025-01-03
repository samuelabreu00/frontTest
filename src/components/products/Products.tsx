// components/items/Items.tsx

import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/cartContext"; 

const ContainerItemns = styled.div`
  box-shadow: 0px 2px 8px 0px #00000043;
  width: 300px;
  min-height: 280px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 1rem;
`;

const ImgProduct = styled.img`
  width: 129px;
  height: 170px;
  padding: 18px 0;
  cursor: pointer;
  overflow: visible;
  display: block;
  transition: .3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 14px;
  gap: 10px 0;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const NameProduct = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 280px;
  height: 38px;
  line-height: 19px;
  color: #2c2c2c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PriceProduct = styled.p`
  font-size: 15px;
  font-weight: 700;
  width: 100px;
  height: 26px;
  line-height: 19px;
  color: #fff;
  border-radius: 5px;
  background-color: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 22px;
  border: none;
  outline: none;
  background-color: #3a89ff;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: .3s;
  &:hover {
    opacity: .8;
  }
`;

const Desconto = styled.div`
  position: absolute;
  right: -18px;
  top: -18px;
  background-color: #ff1919;
  color: #fff;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`


interface CartProductProps{
  title: string;
  description: string;
  brand: string;
  price: number;
  id: number;
  image: string;
}
const Items: React.FC<CartProductProps> = ({ title, price, image, id }) => {
  const { addProductCart }: any = useContext(CartContext); 

  const handleAddToCart = () => {
    addProductCart({
      id,
      title,
      price,
      image,
      quantity: 1,
    });
  };

 
  
  const formattedPrice = price.toFixed(2);
  return (
    <ContainerItemns>
      <ImgProduct src={image} alt={title} />
      <Descriptions>
        <Info>
          <NameProduct>{title}</NameProduct>
          <PriceProduct>R${formattedPrice}</PriceProduct>
          {price < 100 ? <Desconto>50%</Desconto> : null}
        </Info>
      </Descriptions>
      <Button onClick={handleAddToCart}>
        <FaCartPlus />
        Add to cart
      </Button>
    </ContainerItemns>
  );

};

export default Items;

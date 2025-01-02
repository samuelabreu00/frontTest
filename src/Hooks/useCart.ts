import { useState } from "react";

export const useCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleOpenCart = () => {
    setIsCartVisible(true);

  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };


  return {
    isCartVisible,
    handleOpenCart,
    handleCloseCart
  };
};

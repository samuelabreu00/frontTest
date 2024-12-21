import React, { createContext, useState, ReactNode, useEffect } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  productsCart: Product[];
  addProductCart: (product: Product) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productsCart, setProductsCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("productsCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }, [productsCart]);


  const addProductCart = (product: Product) => {
    setProductsCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (id: number) => {
    setProductsCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setProductsCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ productsCart, addProductCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
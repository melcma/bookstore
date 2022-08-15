import type { AppProps } from "next/app";
import { createContext, useContext, useMemo, useState } from "react";
import "../../styles/globals.css";

type CartContextInterface = any;

export const CartContext = createContext<CartContextInterface>([]);

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be within a CartProvider");
  return context;
};

const CartProvider = (props: any) => {
  const [cart, updateCart] = useState([]);
  const value = useMemo(() => [cart, updateCart], [cart]);
  return <CartContext.Provider value={value} {...props} />;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export { CartProvider, useCart };
export default MyApp;

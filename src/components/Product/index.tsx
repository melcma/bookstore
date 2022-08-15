import Image from "next/image";
import { useCart } from "../../pages/_app";
import { RemoveProductButton, AddProductButton } from "./Buttons";

interface IProduct {
  node: {
    id: number;
    title: string;
    featuredImage: {
      url: string;
    };
    priceRange: {
      maxVariantPrice: {
        amount: number;
      };
    };
    totalInventory: number;
  };
}

interface IProps {
  product: IProduct;
  layout?: string;
}

export function Product({ product, layout }: IProps) {
  const [cart, updateCart] = useCart();

  const addProduct = (product: IProduct) => updateCart([...cart, product]);
  const removeProduct = (product: IProduct) => {
    return updateCart([
      ...Array.prototype.filter.call(
        cart,
        (cartProduct: IProduct) => cartProduct.node.id !== product.node.id
      ),
    ]);
  };

  const isProductInCart = Array.prototype.find.call(
    cart,
    (cartProduct: IProduct) => cartProduct.node?.id === product.node.id
  );

  if (layout === "compact") {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Image
          width="150"
          height="100"
          src={product.node.featuredImage.url}
          alt={product.node.title}
        />
        <div style={{ marginLeft: 8 }}>
          <h3>{product.node.title}</h3>
          <p>{product.node.priceRange.maxVariantPrice.amount}</p>
          <p>{product.node.totalInventory} in stock</p>
        </div>
        {isProductInCart && (
          <RemoveProductButton removeProduct={() => removeProduct(product)} />
        )}
        {!isProductInCart && (
          <AddProductButton addProduct={() => addProduct(product)} />
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <Image
        width="300"
        height="200"
        src={product.node.featuredImage.url}
        alt={product.node.title}
      />
      <h3>{product.node.title}</h3>
      <p>{product.node.priceRange.maxVariantPrice.amount}</p>
      <p>{product.node.totalInventory} in stock</p>
      {isProductInCart && (
        <RemoveProductButton removeProduct={() => removeProduct(product)} />
      )}
      {!isProductInCart && (
        <AddProductButton addProduct={() => addProduct(product)} />
      )}
    </div>
  );
}

import { Product } from "../components/Product";
import { IProduct, IProducts } from "./Product/interfaces";

interface Props {
  products: IProducts;
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <section
      style={{
        marginTop: 20,
      }}
    >
      {products?.edges?.map((product: IProduct) => (
        <Product key={product.node.id} product={product} layout="compact" />
      ))}
    </section>
  );
};

export default ProductGrid;

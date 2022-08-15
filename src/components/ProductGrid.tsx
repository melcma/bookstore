import { Product } from "../components/Product";
import { IProduct, IProducts } from "./Product/interfaces";

interface Props {
  products: IProducts;
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "1.5rem",
        marginTop: 20,
      }}
    >
      {products?.edges?.map((product: IProduct) => (
        <Product key={product.node.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;

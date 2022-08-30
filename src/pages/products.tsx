import Nav from "../components/Nav/Nav";
import { IProductsPageProps } from "../components/Product/interfaces";
import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../shopify/products";

const getServerSideProps = async () => {
  const response = await getProducts;
  const { products } = response.data.data;

  return {
    props: {
      products,
    },
  };
};

const Products = ({ products }: IProductsPageProps) => {
  return (
    <main>
      <Nav />
      <h1 style={{ textAlign: "center" }}>Products Page</h1>
      <ProductGrid products={products} />
    </main>
  );
};
export { getServerSideProps };
export default Products;

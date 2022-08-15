import Nav from "../components/Nav/Nav";
import { IProductsPageProps } from "../components/Product/interfaces";
import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../shopify/products";

const getServerSideProps = async () => {
  const products = await getProducts
    .then((response) => {
      if (response.data.errors) {
        console.error(response.data.errors);
        return [];
      }
      return response.data.data.products;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });

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
      <ProductGrid products={products} />
    </main>
  );
};
export { getServerSideProps };
export default Products;

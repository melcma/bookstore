import type { NextPage } from "next";

import Nav from "../components/Nav/Nav";
import ProductList from "../components/ProductList";
import Button from "@mui/material/Button";
import Container from "../components/Container";
import { IProduct, IProducts } from "../components/Product/interfaces";

import { useCart } from "../pages/_app";
import { getProducts } from "../shopify/products";
import { createCart } from "../shopify/cart";

export async function getServerSideProps() {
  const products = await getProducts
    .then((response) => {
      if (response.data.errors) {
        return console.error(response.data.errors);
      }
      return response.data.data.products;
    })
    .catch((error) => error);

  return {
    props: {
      products,
    },
  };
}

interface Props {
  products: IProducts;
}

const Cart: NextPage<Props> = ({ products }) => {
  const [cart] = useCart();

  const productsInCart = {
    edges: [
      ...products.edges.filter((product: IProduct) =>
        Array.prototype.find.call(
          cart,
          (cartProduct: IProduct) => cartProduct.node.id === product.node.id
        )
      ),
    ],
  };

  async function createCheckout(products: IProducts) {
    createCart({
      input: {
        lines: [
          ...products.edges.map((product) => ({
            merchandiseId: product.node.variants.edges[0].node.id,
          })),
        ],
      },
    }).then((response) => {
      if (response.data.cartCreate.cart) {
        window.location.replace(response.data.cartCreate.cart.checkoutUrl);
      }
    });
  }

  return (
    <div>
      <Nav />
      <Container>
        <ProductList products={productsInCart} />
        <Button
          variant="contained"
          onClick={() => createCheckout(productsInCart)}
        >
          Checkout
        </Button>
      </Container>
    </div>
  );
};

export default Cart;

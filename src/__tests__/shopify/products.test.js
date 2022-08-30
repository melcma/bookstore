import { getProducts } from "../../shopify/products";

describe("Shopify Service", () => {
  it("returns products", async () => {
    const response = await getProducts;
    const products = response.data.data.products.edges;
    expect(products).not.toHaveLength(0);
  });
});

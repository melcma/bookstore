import { render, screen } from "@testing-library/react";
import ProductsPage, { getServerSideProps } from "../../pages/products";
import "@testing-library/jest-dom";

describe("ProductsPage", () => {
  it("renders a heading", () => {
    render(<ProductsPage />);

    const heading = screen.getByRole("heading", {
      name: /Products Page/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders products page unchanged", () => {
    const { container } = render(<ProductsPage />);
    expect(container).toMatchSnapshot();
  });

  it("renders products props", async () => {
    const response = await getServerSideProps();
    const products = response.props.products.edges;
    expect(products).not.toHaveLength(0);
  });

  it("renders no products when service fails", async () => {
    jest.mock("../../shopify/products");
  });
});

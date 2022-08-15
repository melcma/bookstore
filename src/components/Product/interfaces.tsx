export interface IProduct {
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
    variants: {
      edges: [
        {
          node: {
            id: number;
          };
        }
      ];
    };
  };
}

export interface IProducts {
  edges: IProduct[];
}

export interface IProductsPageProps {
  products: {
    edges: IProduct[];
  };
}

import { createQuery } from "./createQuery";

const query = `
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
          featuredImage {
            url
          }
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          totalInventory
          variants(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const getProducts = createQuery(query);

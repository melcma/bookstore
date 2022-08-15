import { createMutation } from "./createQuery";

const query = `
mutation CartCreate ($input: CartInput!) {
  cartCreate (input: $input) {
    cart {
      id
      checkoutUrl
      createdAt
    }
  }
}
`;

export const createCart = (variables: any) => {
  return createMutation(query, variables);
};

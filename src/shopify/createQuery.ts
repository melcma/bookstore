import axios, { AxiosRequestHeaders, AxiosPromise } from "axios";

const queryHeaders: AxiosRequestHeaders = {
  "Content-Type": "application/graphql",
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_KEY || "",
};

const mutationHeaders: AxiosRequestHeaders = {
  "Content-Type": "application/json",
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_KEY || "",
};

const createQuery = (query: string) =>
  axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_SHOPIFY_URL}/api/2022-01/graphql.json`,
    headers: queryHeaders,
    data: query,
  });

const createMutation = (query: string, variables: any) => {
  return axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_SHOPIFY_URL}/api/2022-01/graphql.json`,
    headers: mutationHeaders,
    data: JSON.stringify({ query, variables }),
  }).then((res) => res.data);
};

export { createQuery, createMutation };

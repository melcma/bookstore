import React from "react";
import Button from "@mui/material/Button";

export const RemoveProductButton: React.FC<{ removeProduct: () => void }> = ({
  removeProduct,
}) => (
  <Button variant="outlined" onClick={() => removeProduct()}>
    Remove From Cart
  </Button>
);

export const AddProductButton: React.FC<{ addProduct: () => void }> = ({
  addProduct,
}) => {
  return (
    <Button variant="contained" onClick={() => addProduct()}>
      Add To Cart
    </Button>
  );
};

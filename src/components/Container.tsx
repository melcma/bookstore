import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div style={{ maxWidth: "1360px", margin: "auto" }}>{children}</div>;
};

export default Container;

import React from "react";
import { useUser } from "./UserProvider";

const ProductPage = () => {
  const { username } = useUser();

  return <h1>Welcome, {username}!</h1>;
};

export default ProductPage;

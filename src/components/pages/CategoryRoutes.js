import React from "react";
import { Route } from "react-router-dom";
import CateProductsAD from "./CateProductsAD";

const CategoryRoutes = () => {
  return (
    <div>
      <Route path='/products/category/storage'>
        <CateProductsAD></CateProductsAD>
      </Route>
    </div>
  );
};

export default CategoryRoutes;

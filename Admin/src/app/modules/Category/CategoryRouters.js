import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCategory from "./AddCategory/AddCategory";
import CategoryComponent from "./CategoryComponent/CategoryComponent";
import Products from "./CategoryComponent/Products";
import CategoryUpdate from "./CategoryUpdate/CategoryUpdate";
import AddSubCategory from "./SubCategory/AddSubCategory/AddSubCategory";
import SubCategoryComponent from "./SubCategory/SubCategoryComponent";
import UpdateSubCategory from "./SubCategory/update/update";

function OrderRouters() {
  return (
    <Switch>
      <Route path="/categories" exact component={CategoryComponent} />
      <Route path="/categories/update/:id" component={CategoryUpdate} />
      <Route path="/categories/add" exact component={AddCategory} />
      <Route
        path="/categories/sub-category/:id"
        exact
        component={SubCategoryComponent}
      />
      <Route
        path="/categories/sub-category/add/:id"
        exact
        component={AddSubCategory}
      />
      <Route path="/categories/Products/:id" exact component={Products} />
      <Route
        path="/categories/sub-category/update/:id"
        exact
        component={UpdateSubCategory}
      />
    </Switch>
  );
}

export default OrderRouters;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./Category/Category";
import Categories from "./Categories/Categories";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Categories />} />
        <Route exact path='/:id' element={<Category />} />
      </Routes>
    </>
  );
};

export default App;

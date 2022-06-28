import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Category/Category";
import Categories from "./Categories/Categories";
import NewCategory from "./NewCategory/NewCategory";
import EditCategory from "./EditCategory/EditCategory";
import MainHeader from "./Shared/MainHeader";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route exact path='/' element={<Categories />} />
        <Route exact path='/new_category' element={<NewCategory />} />
        <Route exact path='/:id' element={<Category />} />
        <Route exact path='/edit/:id' element={<EditCategory />} />
      </Routes>
    </Router>
  );
};

export default App;

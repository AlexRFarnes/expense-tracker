import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Category/Category";
import Categories from "./Categories/Categories";
import NewCategory from "./Categories/NewCategory";
import EditCategory from "./Categories/EditCategory";
import MainHeader from "./MainHeader/MainHeader";
import EditExpense from "./Category/EditExpense";
import NewExpense from "./Category/NewExpense";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route exact path='/' element={<Categories />} />
        <Route exact path='/new_category' element={<NewCategory />} />
        <Route exact path='/:id' element={<Category />} />
        <Route exact path='/edit/:id' element={<EditCategory />} />
        <Route exact path='/:id/edit/:expense_id' element={<EditExpense />} />
        <Route exact path='/:id/new_expense' element={<NewExpense />} />
      </Routes>
    </Router>
  );
};

export default App;

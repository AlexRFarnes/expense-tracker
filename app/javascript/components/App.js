import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./Category/Category";
import Categories from "./Categories/Categories";
import NewCategory from "./NewCategory/NewCategory";
import { Header, Title } from "./Style/Header";

const App = () => {
  return (
    <>
      <Header>
        <Title>Expense Tracker</Title>
        <p className='subheader'>Always keep track of your expenses!</p>
      </Header>
      <Routes>
        <Route exact path='/' element={<Categories />} />
        <Route exact path='/new_category' element={<NewCategory />} />
        <Route exact path='/:id' element={<Category />} />
      </Routes>
    </>
  );
};

export default App;

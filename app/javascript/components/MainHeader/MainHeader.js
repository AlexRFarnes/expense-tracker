import React from "react";
import { Header, Title } from "../Style/Header";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav>
      <Header>
        <NavLink to='/'>
          <Title>Expense Tracker</Title>
        </NavLink>
        <p className='subheader'>Never loose track of any of your expenses!</p>
      </Header>
    </nav>
  );
};

export default MainHeader;

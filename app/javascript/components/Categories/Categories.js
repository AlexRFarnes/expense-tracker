import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import styled from "styled-components";
import { Header, Title } from "../Style/Header";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all the categories from the api
    axios
      .get("/api/v1/categories.json")
      .then(resp => {
        setCategories(resp.data.data);
      })
      .catch(resp => {
        console.log("Ooop! Something went wrong", resp);
      });
  }, []); // add an empty array so it only runs once

  const grid = categories.map((category, index) => {
    return (
      <Category key={index} id={category.id} attributes={category.attributes} />
    );
  });

  return (
    <div className='home'>
      <Header>
        <Title>Expense Tracker</Title>
        <p className='subheader'>Always keep track of your expenses!</p>
      </Header>
      <div className='grid'>{grid}</div>
    </div>
  );
};

export default Categories;

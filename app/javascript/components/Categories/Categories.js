import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { CardGrid, CategoryButton } from "../Style/SharedStyles";

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
        console.error("Ooop! Something went wrong", resp);
      });
  }, []); // add an empty array so it only runs once

  let navigate = useNavigate();

  const handleDelete = id => {
    if (window.confirm("Delete this category?")) {
      axios.delete(`/api/v1/categories/${id}`);
      setCategories(prevState =>
        prevState.filter(category => category.id != id)
      );
    }
  };

  const handleUpdate = id => {
    navigate(`/edit/${id}`);
  };

  const grid = categories.map((category, index) => {
    return (
      <Category
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        key={index}
        id={category.id}
        attributes={category.attributes}
      />
    );
  });

  return (
    <div className='home'>
      <CardGrid>{grid}</CardGrid>
      <CategoryButton>
        <Link to='/new_category'>Add New Category</Link>
      </CategoryButton>
    </div>
  );
};

export default Categories;

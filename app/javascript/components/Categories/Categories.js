import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`;

const CategoryButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: block;
  width: 10rem;
  text-align: center;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #00990d;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

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
      <Grid>{grid}</Grid>
      <CategoryButton>
        <Link to='/new_category'>Add New Category</Link>
      </CategoryButton>
    </div>
  );
};

export default Categories;

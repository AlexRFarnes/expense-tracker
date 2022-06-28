import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
  CardTextArea,
} from "../Style/CardForm";
import axios from "axios";

const NewCategory = () => {
  const [newCategory, setNewCategory] = useState({
    category: "",
    description: "",
  });

  const categoryInputRef = useRef(null);

  useEffect(() => {
    categoryInputRef.current.focus();
  }, []);

  let navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post("/api/v1/categories", newCategory)
      .then(resp => {
        console.log(resp.data);
        navigate("/");
      })
      .catch(resp => console.error(resp.data));

    setNewCategory({ category: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Create New Category</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput
              onChange={handleChange}
              name='category'
              value={NewCategory.category}
              placeholder='Category Title'
              type='text'
              ref={categoryInputRef}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardTextArea
              onChange={handleChange}
              name='description'
              value={NewCategory.description}
              placeholder='Category Description'
              type='text'
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardButton type='submit'>Add Category</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </form>
  );
};

export default NewCategory;

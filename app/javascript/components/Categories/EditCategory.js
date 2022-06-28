import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const EditCategory = () => {
  const [editCategory, setEditCategory] = useState({
    category: "",
    description: "",
  });

  const categoryInputRef = useRef(null);

  useEffect(() => {
    categoryInputRef.current.focus();
    axios
      .get(`/api/v1/categories/${params.id}`)
      .then(resp => setEditCategory(resp.data.data.attributes))
      .catch(resp => console.error(resp));
  }, []);

  let params = useParams();

  let navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();
    setEditCategory({ ...editCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .patch(`/api/v1/categories/${params.id}`, editCategory)
      .then(resp => {
        navigate("/");
      })
      .catch(resp => console.error(resp));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Edit {editCategory.category} Category</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput
              name='category'
              onChange={handleChange}
              value={editCategory.category}
              placeholder='Category Title'
              type='text'
              ref={categoryInputRef}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardTextArea
              name='description'
              onChange={handleChange}
              value={editCategory.description}
              placeholder='Category Description'
              type='text'
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardButton type='submit'>Update Category</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </form>
  );
};

export default EditCategory;

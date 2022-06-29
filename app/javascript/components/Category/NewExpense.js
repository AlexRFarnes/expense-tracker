import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  CardBody,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardInput,
  CardWrapper,
  CardTextArea,
  CardButton,
} from "../Style/CardForm";

const NewExpense = () => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    description: "",
    amount: 0,
    category_id: null,
  });

  const expenseInputRef = useRef(null);

  useEffect(() => {
    expenseInputRef.current.focus();
    setNewExpense({ ...newExpense, category_id: params.id });
  }, []);

  let params = useParams();
  let navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post(`/api/v1/expenses`, newExpense)
      .then(resp => {
        navigate(`/${params.id}`);
      })
      .catch(resp => console.error(resp));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Create New Expense</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput
              name='title'
              onChange={handleChange}
              value={newExpense.title}
              type='text'
              placeholder='Expense Title'
              ref={expenseInputRef}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardTextArea
              name='description'
              onChange={handleChange}
              value={newExpense.description}
              placeholder='Expense Description'
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              name='amount'
              onChange={handleChange}
              value={newExpense.amount}
              placeholder='Expense Amount'
              type='number'
              step='0.01'
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardButton type='submit'>Create Category</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </form>
  );
};

export default NewExpense;

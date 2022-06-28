import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const EditExpense = () => {
  const [editExpense, setEditExpense] = useState({
    title: "",
    description: "",
    amount: 0,
  });

  const expenseInputRef = useRef(null);

  useEffect(() => {
    expenseInputRef.current.focus();
    axios
      .get(`/api/v1/expenses/${params.expense_id}`)
      .then(resp => setEditExpense(resp.data.data.attributes))
      .catch(resp => console.error(resp));
  }, []);

  let params = useParams();

  let navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();
    setEditExpense({ ...editExpense, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .patch(`/api/v1/expenses/${params.expense_id}`, editExpense)
      .then(resp => {
        navigate(`/${params.id}/`);
      })
      .catch(resp => console.error(resp));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Edit {editExpense.title} Expense</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput
              name='title'
              onChange={handleChange}
              value={editExpense.title}
              placeholder='Expense Title'
              type='text'
              ref={expenseInputRef}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardTextArea
              name='description'
              onChange={handleChange}
              value={editExpense.description}
              placeholder='Expense Description'
              type='text'
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              name='amount'
              onChange={handleChange}
              value={editExpense.amount}
              placeholder='Expense Amount'
              type='number'
              step='0.01'
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

export default EditExpense;

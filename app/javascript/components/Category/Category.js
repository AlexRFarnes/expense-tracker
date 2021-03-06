import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ExpensesDate from "./ExpensesDate";
import { Link } from "react-router-dom";
import { AddNewButton } from "../Style/SharedStyles";

const Category = () => {
  const [expenses, setExpenses] = useState({});

  useEffect(() => {
    axios
      .get(`/api/v1/categories/${params.id}`)
      .then(resp => {
        const obj = {};
        resp.data.data.meta.grouped_expenses.forEach(
          ([month, expenses]) => (obj[month] = expenses)
        );
        setExpenses(obj);
      })
      .catch(resp => console.error(resp));
  }, []);

  let params = useParams();
  let navigate = useNavigate();

  const handleDelete = (id, month) => {
    if (window.confirm("Delete this expense?")) {
      const filteredExpenses = [...expenses[month]].filter(
        expense => expense.id != id
      );
      axios.delete(`/api/v1/expenses/${id}`);
      setExpenses({ ...expenses, [month]: filteredExpenses });
    }
  };

  const handleUpdate = id => {
    navigate(`/${params.id}/edit/${id}`);
  };

  const allExpenses = Object.entries(expenses).map((groupedExpenses, index) => {
    return (
      groupedExpenses[1].length > 0 && (
        <ExpensesDate
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          key={index}
          category_id={params.id}
          groupedExpenses={groupedExpenses}></ExpensesDate>
      )
    );
  });

  return (
    <>
      {allExpenses}
      <AddNewButton>
        <Link to={`/${params.id}/new_expense`}>Add New Expense</Link>
      </AddNewButton>
    </>
  );
};

export default Category;

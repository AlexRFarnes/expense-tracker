import React from "react";
import styled from "styled-components";
import { CardGrid } from "../Style/SharedStyles";
import Expense from "./Expense";

const MonthWrapper = styled.div``;

const MonthTitle = styled.div`
  background: #990237;
  font-size: 26px;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 26px 12px;
  margin-bottom: -16px;
`;

const ExpensesDate = ({ groupedExpenses, handleUpdate, handleDelete }) => {
  const month = groupedExpenses[0];
  const expenses = groupedExpenses[1].map(expense => {
    return (
      <Expense
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        key={expense.id}
        expense={expense}
        month={month}
      />
    );
  });
  return (
    <MonthWrapper>
      <MonthTitle>{month}</MonthTitle>
      <CardGrid>{expenses}</CardGrid>
    </MonthWrapper>
  );
};

export default ExpensesDate;

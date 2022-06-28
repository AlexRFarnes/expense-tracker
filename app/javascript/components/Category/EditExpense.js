import React from "react";
import { useParams } from "react-router-dom";

const EditExpense = () => {
  let params = useParams();

  console.log(params);
  return <div>This is the Expenses#edit page of the app</div>;
};

export default EditExpense;

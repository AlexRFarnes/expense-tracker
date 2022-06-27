import React from "react";
import { Link } from "react-router-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardButton,
  CardFieldset,
  CardOptionsNote,
} from "../Style/Card";

const Category = ({
  id,
  attributes: { category, description, total_expenses },
}) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>{category}</CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardOptionsNote>{description}</CardOptionsNote>
          <CardOptionsNote>NTD {total_expenses.toFixed(2)}</CardOptionsNote>
        </CardFieldset>
        <CardFieldset>
          <CardButton>
            <Link to={`/${id}`}>View Category</Link>
          </CardButton>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default Category;

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
  CardOptionsNoteBold,
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
          <CardOptionsNoteBold>
            NTD {total_expenses.toFixed(2)}
          </CardOptionsNoteBold>
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

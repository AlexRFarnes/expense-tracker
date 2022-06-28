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
  CardIcon,
} from "../Style/Card";

const Category = ({
  id,
  attributes: { category, description, total_expenses },
  handleDelete,
  handleUpdate,
}) => {
  return (
    <CardWrapper>
      <CardHeader icon>
        <CardIcon
          big
          eye
          left
          color={"neutral"}
          className='fa-solid fa-pen-to-square'
          onClick={() => handleUpdate(id)}
        />
        <CardHeading>{category}</CardHeading>
        <CardIcon
          big
          eye
          color={"danger"}
          className='fa-solid fa-trash'
          onClick={() => handleDelete(id)}
        />
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

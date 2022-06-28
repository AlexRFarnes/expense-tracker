import React from "react";
import {
  CardBody,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardOptionsNote,
  CardWrapper,
  CardOptionsNoteBold,
  CardIcon,
} from "../Style/Card";

const Expense = ({
  expense: { id, title, description, amount },
  handleUpdate,
  handleDelete,
  month,
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
        <CardHeading>{title}</CardHeading>
        <CardIcon
          big
          eye
          color={"danger"}
          className='fa-solid fa-trash'
          onClick={() => handleDelete(id, month)}
        />
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardOptionsNote>{description}</CardOptionsNote>
          <CardOptionsNoteBold>
            $ {Number(amount).toFixed(2)}
          </CardOptionsNoteBold>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default Expense;

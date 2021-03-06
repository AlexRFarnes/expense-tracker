import React from "react";
import styled, { css } from "styled-components";
// import "font-awesome/css/font-awesome.css";

const iconColors = { danger: "#fc1a0f", neutral: "#777" };

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 8px;

  ${props =>
    props.icon &&
    css`
      position: relative;
    `}
`;

export const CardHeading = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 16px;
  }

  &:nth-last-of-type(2) {
    margin-top: 16px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardIcon = styled.span`
  color: #777;
  ${props => {
    return (
      props.color &&
      css`
        color: ${iconColors[props.color]};
      `
    );
  }}
  cursor: pointer;
  opacity: 0.25;
  transition: opacity 0.25s ease-in;

  &:hover {
    opacity: 0.95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 16px;
      right: 16px;
    `}

    ${props =>
    props.left &&
    css`
      position: absolute;
      top: 16px;
      left: 16px;
    `}


  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.p`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 16px;
  text-align: center;
`;

export const CardOptionsNoteBold = styled(CardOptionsNote)`
  font-weight: bold;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

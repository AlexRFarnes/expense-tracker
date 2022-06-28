import React from "react";
import styled, { css } from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  margin-bottom: 72px;
`;

export const CategoryButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: block;
  width: 10rem;
  text-align: center;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #02b8e6;
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

import React from "react";
import styled, { css } from "styled-components";

export const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-bottom: 2em;
  background-color: #e5195f;
  color: #fff;

  a {
    color: inherit;
  }

  .subheader {
    margin-top: 0;
    padding-bottom: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-botom: 0;
  padding: 0;
  margin: 0;
`;

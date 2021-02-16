import React from "react";
import styled from "styled-components";

import Loading from "../../../img/loading.gif";

const SubmitBtn = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  padding: 18px auto;
  margin: 16px 0 14px;
  background: #ffca28;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  color: #263238;
  text-transform: uppercase;
  transition: all 200ms;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.9;
  }
  & img.loading {
    height: 30px;
    width: auto;
  }
`;

function Submit({ text, onClick, loading }) {
  return (
    <SubmitBtn onClick={onClick}>
      {!loading && text}
      {loading && <img src={Loading} alt="Carregando" className="loading" />}
    </SubmitBtn>
  );
}

export default Submit;

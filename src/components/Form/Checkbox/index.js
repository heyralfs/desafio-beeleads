import React from "react";
import styled from "styled-components";

const CheckboxBase = styled.input`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  display: inline;
  position: absolute;
  top: 2px;
  border-radius: 2px;
  &:after {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background-color: #546e7a;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 1px solid white;
    transition: all 100ms;
  }
  &:checked:after {
    background-color: transparent;
    border: 0;
  }
`;

const CheckboxLabel = styled.p`
  font-size: 14px;
  display: inline-block;
  text-align: left;
  padding-left: 22px;
  & a {
    text-decoration: none;
    transition: all 200ms;
    color: white;
    font-weight: 700;
  }
  & a:hover {
    color: #ffca28;
  }
`;

const CheckboxWrapper = styled.div`
  margin: 8px 0;
  position: relative;
`;

function Checkbox({ onClick }) {
  return (
    <CheckboxWrapper>
      <CheckboxBase
        type="checkbox"
        required
        onClick={onClick}
        id="termsCheckbox"
      />
      <CheckboxLabel>
        Ao marcar esta opção você aceita nossa{" "}
        <a href="#">Política de Privacidade</a> e está de acordo com nossos{" "}
        <a href="#">Termos e Condições</a>.
      </CheckboxLabel>
    </CheckboxWrapper>
  );
}
export default Checkbox;

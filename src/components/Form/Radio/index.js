import React from "react";
import styled from "styled-components";

const InputRadioBase = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  &:focus {
    outline: none;
  }
  &:after {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #546e7a;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    transition: all 100ms;
  }
  &:checked:after {
    background-color: transparent;
    border: 0;
  }
`;

const Label = styled.label`
  font-weight: 700;
  text-transform: uppercase;
`;

const RadioWrapper = styled.div`
  width: 50%;
  margin: 16px 12px;
  display: flex;
  align-items: center;
`;

function InputRadio({ name, value, label, justifyContent, onClick }) {
  const id = name + "_" + value;
  return (
    <RadioWrapper style={{ justifyContent: `${justifyContent}` }}>
      <InputRadioBase
        type="radio"
        name={name}
        value={value}
        id={id}
        required
        onClick={onClick}
      />
      <Label htmlFor={id}>{label}</Label>
    </RadioWrapper>
  );
}

export default InputRadio;

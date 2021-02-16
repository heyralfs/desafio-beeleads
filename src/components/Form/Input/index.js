import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 8px 0;
  &.w-100 {
    width: 100%;
  }
  &.w-50 {
    width: calc(50% - 4px);
  }
  & span {
    display: block;
    color: #ffdddd;
    font-size: 12px;
    padding: 2px;
  }
`;

const InputBase = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #cfd8dc;
  background: #ffffff;
  padding: 18px 16px;
  color: #263238;
  font-size: 16px;
  transition: all 200ms;
  &::placeholder {
    color: #b0bec5;
  }
  &:focus {
    outline: 0;
    border: 1px solid #ffca28;
  }
  &.error {
    background: #ffdddd;
    border: 2px solid #ff5555;
  }
`;

function Input({ width, type, placeholder, error, message, ...props }) {
  const inputWrapperClass = width === "100" ? "w-100" : "w-50";

  const errorClass = error ? "error" : "";

  return (
    <InputWrapper className={inputWrapperClass}>
      <InputBase
        type={type}
        placeholder={placeholder}
        required
        className={errorClass}
        {...props}
      />
      {error && <span>{message}</span>}
    </InputWrapper>
  );
}

export default Input;

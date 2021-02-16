import React from "react";

const types = {
  nome: {
    regex: /^([a-zA-ZàáãâéêíóôõçÀÁÃÂÉÊÍÓÔÕÇ ,.'-]{3,})+$/u,
    message: "Digite seu nome completo",
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Digite um e-mal válido",
  },
  telefone: {
    regex: /^\({0,1}(\d{2})\){0,1}(\d{4,5})\-{0,1}(\d{4})$/,
    message: "Digite um telefone válido com código de área",
  },
  nascimento: {
    regex: /^\d{2}\/\d{2}\/\d{4}$/,
    message: "Data de Nascimento inválida. Formato esperado: DD/MM/AAAA",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError(true);
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    message: types[type].message,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;

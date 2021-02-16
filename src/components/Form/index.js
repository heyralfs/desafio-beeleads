import React from "react";
import styled from "styled-components";

import Input from "./Input/";
import InputRadio from "./Radio/";
import Checkbox from "./Checkbox/";
import Submit from "./Submit/";
import useForm from "../../customHooks/useForm";

const FormWrapper = styled.form`
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.05);
  width: 529px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    max-width: 95%;
    margin: 16px auto;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Obs = styled.p`
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
`;

const SuccessMessage = styled.p`
  margin-bottom: 16px;
  text-align: center;
  background: #008e00;
  padding: 5px;
`;

const WarningMessage = styled.span`
  display: block;
  color: #ffdddd;
  font-size: 12px;
  margin: 0 0 12px 0;
  text-align: center;
`;
const FormTitle = styled.p`
  margin-bottom: 16px;
  text-align: center;
`;

export default function Form() {
  const nome = useForm("nome");
  const email = useForm("email");
  const telefone = useForm("telefone");
  const nascimento = useForm("nascimento");

  const [termos, setTermos] = React.useState(null);
  const [gender, setGender] = React.useState(null);

  const [loading, setLoading] = React.useState(false);
  const [formSuccess, setFormSuccess] = React.useState(null);

  function submitHendler(e) {
    e.preventDefault();

    const dados = [nome, email, telefone, nascimento];
    const dadosValidados =
      dados.filter((dado) => !dado.validate()).length > 0 ? false : true;

    if (dadosValidados && termos && gender) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormSuccess(true);
        setTimeout(() => setFormSuccess(null), 3000);

        // reset radio gender
        const genderRadio = document.getElementsByName("gender");
        for (var i = 0; i < genderRadio.length; i++)
          genderRadio[i].checked = false;
        setGender(null);

        // reset terms checkbox
        const termsCheckbox = document.getElementById("termsCheckbox");
        termsCheckbox.checked = false;
        setTermos(null);

        // reset personal information
        dados.forEach((dado) => dado.setValue(""));
      }, 2000);

      // dados do form para enviar
      // (exportar antes do reset dos values)
      const formDataToExport = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        nascimento: nascimento.value,
        genero: gender,
      };
      console.log(formDataToExport);
    } else {
      setFormSuccess(false);
      if (!termos || termos === null) setTermos(false);
      return false;
    }
  }

  return (
    <FormWrapper>
      {formSuccess && (
        <SuccessMessage>Formulário enviado com sucesso!</SuccessMessage>
      )}
      {!formSuccess && (
        <FormTitle>Faça seu cadastro grátis e concorra!</FormTitle>
      )}
      <FormRow>
        <Input width="100" type="text" placeholder="Nome completo" {...nome} />
      </FormRow>
      <FormRow>
        <Input width="100" type="email" placeholder="E-mail" {...email} />
      </FormRow>
      <FormRow>
        <Input
          width="50"
          type="tel"
          placeholder="Telefone"
          title="(99)99999-9999"
          {...telefone}
        />
        <Input
          width="50"
          type="text"
          placeholder="Data de Nascimento"
          title="dd/mm/aaaa"
          {...nascimento}
        />
      </FormRow>
      <FormRow>
        <InputRadio
          name="gender"
          value="m"
          label="Masculino"
          justifyContent="flex-end"
          onClick={(e) => setGender(e.target.value)}
        />
        <InputRadio
          name="gender"
          value="f"
          label="Feminino"
          jusfityContent="flex-start"
          onClick={(e) => setGender(e.target.value)}
        />
      </FormRow>
      {formSuccess === false && !gender && (
        <WarningMessage>Gênero é um campo obrigatório</WarningMessage>
      )}

      <Checkbox onClick={(e) => setTermos(e.target.checked)} termos={termos} />

      {formSuccess === false && termos === false && (
        <WarningMessage>
          Para continuar, é necessário que os termos sejam aceitos
        </WarningMessage>
      )}

      <Submit
        text="Quero concorrer"
        onClick={submitHendler}
        loading={loading}
      />

      <Obs>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim risus
        justo sit volutpat ut quis massa. Pharetra eget dui, aenean at sed
        semper aliquet ultrices sit. Nisl sed aliquam aliquam augue scelerisque.
        At ornare vel vel quisque aliquam pellentesque eu.
      </Obs>
    </FormWrapper>
  );
}

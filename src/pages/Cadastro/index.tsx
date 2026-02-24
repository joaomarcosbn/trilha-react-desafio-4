import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { api } from "../../services/api";

import {
  Container,
  LoginContainer,
  Column,
  Spacing,
  Title,
  FazerLogin,
  FooterLogin,
} from "./styles";
import { IFormLogin } from "./types";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormLogin) => {
    try {
      const { data: userExists } = await api.get(
        `users?email=${formData.email}`,
      );

      if (userExists.length > 0) {
        alert("Este e-mail já está em uso. Tente fazer login.");
        return;
      }

      const { data } = await api.post("/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (data.id) {
        alert("Conta criada com sucesso! Bem-vindo.");
        navigate("/feed");
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Houve um erro no sistema.");
    }
  };

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Cadastro</Title>
          <Spacing />
          <Input
            name="name"
            placeholder="Nome Completo"
            control={control}
            errorMessage={errors?.name?.message}
          />
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />

          <Button title="Cadastrar" onClick={handleSubmit(onSubmit)} />

          <br />

          <FooterLogin>
            <span>Já tenho conta.</span>
            <FazerLogin onClick={handleClickSignIn}>Fazer login</FazerLogin>
          </FooterLogin>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Cadastro;

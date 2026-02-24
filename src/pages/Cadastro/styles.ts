import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh; /* Ocupa a altura total da tela */

  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */

  /* Se o fundo roxo não estiver no globalStyles, adicione aqui: */
  /* background-color: #81259d; */
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: #ffffff;

  border-radius: 8px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens dentro do card */
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;
  color: #81259d;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Spacing = styled.div`
  margin: 10px 0;
`;

export const FooterLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alinha o texto à esquerda */
  gap: 5px;
  font-weight: 700;
  font-family: "Open Sans";
  font-size: 14px;
  margin-top: 20px;
  color: #000; /* Garante que o texto "Já tenho conta" apareça */
`;

export const FazerLogin = styled.span`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23dd7a;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

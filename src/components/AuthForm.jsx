import React, { useState } from "react";
import styled from "styled-components";
import { BaseInput } from "./ui/Input";
import { BaseButton } from "./ui/Button";

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 343px;
  margin: 0 auto;
`;

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <BaseInput
        label="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Введите вашу почту"
      />
      <BaseInput
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите ваш пароль"
      />
      <BaseButton text="Войти" active={email && password} />
    </SForm>
  );
};

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword });
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <BaseInput
        label="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Введите вашу почту"
      />
      <BaseInput
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите ваш пароль"
      />
      <BaseInput
        label="Подтвердите пароль"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Подтвердите ваш пароль"
      />
      <BaseButton
        text="Зарегистрироваться"
        active={
          email && password && confirmPassword && password === confirmPassword
        }
      />
    </SForm>
  );
};

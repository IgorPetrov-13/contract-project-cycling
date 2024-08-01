import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiAxiosInstance, { setAccessToken } from "../service/apiAxiosInstace";

function RegistrationPage({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const onSubmit = (data) => {
    if (data.confirm === data.password) {
      apiAxiosInstance
        .post("/auth/registration", data)
        .then(({ data }) => {
          setAccessToken(data.accessToken);
          setUser(data.user);
          
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>
      <label>
        Ваше имя
        <input
          {...register("name", {
            required: "please, write name",
            minLength: {
              value: 3,
              message: "Минимум три символа",
            },
          })}
        />
      </label>
      <br />
      {errors?.name && (
        <div style={{ color: "red" }}>{errors?.name.message || "Error"}</div>
      )}
      <label>
        Your email
        <input
          {...register("email", {
            required: "please, write email",
            minLength: {
              value: 4,
              message: "Минимум четыре символа",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Некорректный email",
            },
          })}
        />
      </label>
      {errors?.email && (
        <div style={{ color: "red" }}>{errors?.email.message || "Error"}</div>
      )}
      <br />
      <label>
        Пароль
        <input
          type="password"
          {...register("password", {
            required: "please, write name",
            minLength: {
              value: 3,
              message: "Минимум три символа",
            },
          })}
        />
      </label>
      <br />
      {errors?.password && (
        <div style={{ color: "red" }}>
          {errors?.password.message || "Error"}
        </div>
      )}
      <label>
        Повторите пароль
        <input
          type="password"
          {...register("confirm", {
            required: "please, write name",
            minLength: {
              value: 3,
              message: "Минимум три символа",
            },
          })}
        />
      </label>
      {errors?.confirm && (
        <div style={{ color: "red" }}>{errors?.confirm.message || "Error"}</div>
      )}
      <br />
      <input type="submit" disabled={!isValid} />
    </form>
  );
}

export default RegistrationPage;

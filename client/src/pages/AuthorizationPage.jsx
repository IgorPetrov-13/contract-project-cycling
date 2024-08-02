import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiAxiosInstance, { setAccessToken } from "../service/apiAxiosInstace";
import { useNavigate } from "react-router-dom";

function AuthorizationPage({ setUser, user }) {
  const [error,setError] = useState(false) 
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    apiAxiosInstance
      .post("/auth/authorization", data)
      .then(({ data }) => {
        setAccessToken(data.accessToken);
        setUser(data.user);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Вход</h2>

      <br />

      <label>
        Введите email
        <input className="form-control"
          {...register("email", {
            required: "Введите email",
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
      <br />

      {errors?.email && (
        <div style={{ color: "red" }}>{errors?.email.message || "Error"}</div>
      )}
      <br />
      <label>
        Введите пароль
        <input className="form-control"
          type="password"
          {...register("password", {
            required: "Введите пароль",
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
      <br/>
      <input type="submit" disabled={!isValid} />
    </form>
    {error && <h5>{error}</h5>}
    </>
  );
}

export default AuthorizationPage;

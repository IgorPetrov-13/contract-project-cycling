import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiAxiosInstance, { setAccessToken } from "../service/apiAxiosInstace";
import { useNavigate } from "react-router-dom";

function RegistrationPage({ setUser }) {
  const [error, setError] = useState(false);
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
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.confirm === data.password) {
      apiAxiosInstance
        .post("/auth/registration", data)
        .then(({ data }) => {
          setAccessToken(data.accessToken);
          setUser(data.user);
          navigate("/");
        })
        .catch((err) => {setError(err.response.data.message)});
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <label>
          Ваше имя
          <input className="form-control"
            {...register("name", {
              required: "Введите имя",
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
        {errors?.email && (
          <div style={{ color: "red" }}>{errors?.email.message || "Error"}</div>
        )}
        <br />
        <label>
          Пароль
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
        <label>
          Повторите пароль
          <input className="form-control"
            type="password"
            {...register("confirm", {
              required: "Повторите пароль",
              minLength: {
                value: 3,
                message: "Минимум три символа",
              },
            })}
          />
        </label>
        {errors?.confirm && (
          <div style={{ color: "red" }}>
            {errors?.confirm.message || "Error"}
          </div>
        )}
        <br />
        <br/>
        <input type="submit" disabled={!isValid} />
      </form>
      {error && <h5>{error}</h5>}
    </>
  );
}

export default RegistrationPage;

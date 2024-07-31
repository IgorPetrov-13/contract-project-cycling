import React from 'react';
import { useForm } from "react-hook-form";

function AuthorizationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          name: "",
          email: "",
        },
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Вход</h2>
          <lable>
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
          </lable>
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
          <br />
    
          {errors?.email && (
            <div style={{ color: "red" }}>{errors?.email.message || "Error"}</div>
          )}
          <br />
          <input type="submit" disabled={!isValid} />
        </form>
      );
}

export default AuthorizationPage;
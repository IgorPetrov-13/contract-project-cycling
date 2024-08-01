import React from "react";
import { useForm } from "react-hook-form";

function NewRoadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      description: "",
      city: "",
      length: "",
      map: "",
      userId: "1", //!Поставить юзер айди!!--------------------------------
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Добавить веломаршрут</h2>
      <p>
        Для построения карты маршрута воспользуйтесь сервисом от
        <a
          href="https://yandex.ru/map-constructor/?from=mapstools"
          target="_blank"
        >
          Яндекс
        </a>
      </p>
      <br />
      <lable>
        Название маршрута
        <input
          {...register("title", {
            required: "Пожалуйста, напишите названия",
            minLength: {
              value: 3,
              message: "Минимум три символа",
            },
          })}
        />
      </lable>
      <br />
      {errors?.title && (
        <div style={{ color: "red" }}>{errors?.title.message || "Error"}</div>
      )}
      <label>
        Описание маршрута
        <input
          {...register("description", {
            required: "Пожалуйста, опишите маршрут",
            minLength: {
              value: 10,
              message: "Минимум 10 символов",
            },
          })}
        />
      </label>
      {errors?.description && (
        <div style={{ color: "red" }}>
          {errors?.description.message || "Error"}
        </div>
      )}
      <br />
      <lable>
        Город
        <input
          type="city"
          {...register("city", {
            required: "Укажите город",
            minLength: {
              value: 2,
              message: "Минимум два символа",
            },
          })}
        />
      </lable>
      <br />
      {errors?.city && (
        <div style={{ color: "red" }}>{errors?.city.message || "Error"}</div>
      )}
      <lable>
        Длина маршрута (км)
        <input
          type="number"
          {...register("length", {
            required: "Укажите длину маршрута",
          })}
        />
      </lable>
      {errors?.length && (
        <div style={{ color: "red" }}>{errors?.length.message || "Error"}</div>
      )}
      <br />
      <lable>
        Ссылка на маршрут
        <input
          {...register("map", {
            required: "Укажите длину маршрута",
          })}
        />
      </lable>
      {errors?.map && (
        <div style={{ color: "red" }}>{errors?.map.message || "Error"}</div>
      )}
      <br />
      <input type="submit" disabled={!isValid} />
    </form>
  );
}

export default NewRoadForm;

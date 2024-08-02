import React from "react";
import { useForm } from "react-hook-form";
import apiAxiosInstance from "../service/apiAxiosInstace";

function NewRoadForm({ user, setUserRoads, userRoads }) {
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
      mapLink: "",
      userId: user.id, //!Поставить юзер айди!!--------------------------------
    },
  });

  const onSubmit = (data) => {
    console.log(data, 1111111);
    if (
      data.title &&
      data.description &&
      data.city &&
      data.length &&
      data.mapLink &&
      data.userId
    ) {
      apiAxiosInstance
        .post("/roads", data)
        .then(({ data }) => {
          console.log(222, data);
          setUserRoads((prevstate) => [...prevstate, data.newRoad]);
          console.log(111, userRoads);
        })
        .catch((error) => console.log(error));
    }
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
      <label>
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
      </label>
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
      <label>
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
      </label>
      <br />
      {errors?.city && (
        <div style={{ color: "red" }}>{errors?.city.message || "Error"}</div>
      )}
      <label>
        Длина маршрута (км)
        <input
          type="number"
          {...register("length", {
            required: "Укажите длину маршрута",
          })}
        />
      </label>
      {errors?.length && (
        <div style={{ color: "red" }}>{errors?.length.message || "Error"}</div>
      )}
      <br />
      <label>
        Ссылка на маршрут
        <input
          {...register("mapLink", {
            required: "Укажите длину маршрута",
          })}
        />
      </label>
      {errors?.mapLink && (
        <div style={{ color: "red" }}>{errors?.mapLink.message || "Error"}</div>
      )}
      <br />
      <input type="submit" disabled={!isValid} />
    </form>
  );
}

export default NewRoadForm;

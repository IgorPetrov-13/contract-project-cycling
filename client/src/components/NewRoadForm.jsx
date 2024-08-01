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
      map: "",
      userId: user.id, //!Поставить юзер айди!!--------------------------------
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const { data } = apiAxiosInstance.post("/roads", data);
      setUserRoads((prevstate) => [...prevstate, data.newRoad]);
      console.log(userRoads);
    } catch (error) {
      console.log(error.message);
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
          {...register("map", {
            required: "Укажите длину маршрута",
          })}
        />
      </label>
      {errors?.map && (
        <div style={{ color: "red" }}>{errors?.map.message || "Error"}</div>
      )}
      <br />
      <input type="submit" disabled={!isValid} />
    </form>
  );
}

export default NewRoadForm;

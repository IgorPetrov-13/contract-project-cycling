import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

function Slider() {
  return (
    <Carousel style={{paddingBottom: "30px"}}>
      <Carousel.Item>
        <img src={img1} alt="img_cycling1" className="d-block img-fluid" style={{borderRadius: "1px"}}/>
        <Carousel.Caption>
         
        </Carousel.Caption>
        <h4 style={{color: "black"}}>Выбери свой маршрут!</h4>
          <p>
            На нашем сайте представлено множество маршрутов для любого уровня
            подготовки!
          </p>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={img2} alt="img_cycling2" className="d-block img-fluid"/>
        <Carousel.Caption>
         
        </Carousel.Caption>
        <h4>Добавь свой маршрут!</h4>
        <p>Вы легко можете добавить свой веломаршрут на наш сайт!</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

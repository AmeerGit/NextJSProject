import React, { useEffect, useRef, useState } from "react";
import { Flex, CardContent, Text, Spacer } from "vcc-ui";
import axios from "axios";

import CardComponent from "../components/Card";
// Import carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkComponent from "./LinkComponent";
import CarouselButtons from "./CarouselButtons";


interface Car {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
  }
  

const Home : React.FC<Car> = () => {
  const [carsList, setCarsList] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const url = "api/cars.json";
      axios.get(url).then((res) => {
        setCarsList(res.data);
      });
    }
    fetchData();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (next : any) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider ref={slideRef}  {...settings}>
        {carsList.map((car, i) => {
          return (
            <>
              <CardComponent
                key={i}
                id={car.id}
                modelName={car.modelName}
                bodyType={car.bodyType}
                modelType={car.modelType}
                imageUrl={car.imageUrl}
              />
            </>
          );
        })}
      </Slider>
      <CarouselButtons slideRef={slideRef}/>
    </div>
  );
};

export default Home;

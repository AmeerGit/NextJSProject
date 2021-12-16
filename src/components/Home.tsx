import React, { useEffect, useState } from "react";
import { Flex, CardContent, Text, Spacer } from "vcc-ui";
import axios from "axios";

import CardComponent from "../components/Card";
// Import carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkComponent from "./LinkComponent";
import CarouselButtons from "./CarouselButtons";

const Home = () => {
  const [carsList, setCarsList] = useState([]);

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
    responsive: [
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
      <Slider {...settings}>
        {carsList.map((car, i) => {
          return (
              <>
            <CardComponent
              id={car.id}
              modelName={car.modelName}
              bodyType={car.bodyType}
              modelType={car.modelType}
              imageUrl={car.imageUrl}
            />
            <LinkComponent />
            </>
          );
        })}
        
      </Slider>
      <CarouselButtons />
    </div>
  );
};

export default Home;

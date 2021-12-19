import React, { useEffect, useRef, useState } from "react";
import { Flex, CardContent, Text, Spacer } from "vcc-ui";
import CardComponent from "../components/Card";
// Import carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkComponent from "./LinkComponent";
import CarouselButtons from "./CarouselButtons";
import { fetchData} from '../services/data'

import settings from '../common/Utils';

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
  
   fetchData().then((res) => setCarsList(res)).catch( err => console.log(err));
  }, []);

 
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
      <CarouselButtons slideRef={slideRef} activeSlide={activeSlide}/>
    </div>
  );
};

export default Home;

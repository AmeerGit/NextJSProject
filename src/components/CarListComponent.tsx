import React from "react";
import Slider from "react-slick";
import CarouselButtons from "./CarouselButtons";
import CardComponent from "../components/Card";
import settings from "../common/Utils";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

interface Cars {
  carsList: any;
  slideRef: any;
}
const CarListComponent: React.FC<Cars> = ({ carsList, slideRef }) => {
  return (
    <>
      <Slider ref={slideRef} {...settings}>
        {carsList.map((car: Car, index) => {
          return (
            <>
              <CardComponent
                key={index}
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
      <div className="buttonContainer">
        <CarouselButtons slideRef={slideRef} />
      </div>
    </>
  );
};

export default CarListComponent;

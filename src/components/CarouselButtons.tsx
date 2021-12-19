import React from "react";
import { Flex, Button, Block, ExtendCSS } from "vcc-ui";
import Icons from "../../docs/chevron-circled.svg";
import Image from "next/image";

interface Props {
  slideRef: {
    current: any;
    
  };
  activeSlide: Number;
}

const CarouselButtons: React.FC<Props> = ({ slideRef , activeSlide }) => {
  const next = () => {
    slideRef.current.slickNext();
  };
  const previous = () => {
    slideRef.current.slickPrev();
  };
 console.log('active slide++++++++++++++++++++++++', activeSlide);



  return (
    <>
      <Flex extend={{display: "flex", flexDirection: "row"}}>
        <Block extend={{flexGrow: 1}}></Block>
        <Block extend={{ display: "flex", flexDirection: "row" }}>
          <Button size="small" variant="text" onClick={previous} >
            <Image height="40" width="40" src={Icons} className="prevArrowClass" alt="Previous button" />
          </Button>
          <Button size="small" variant="text" onClick={next} >
            <Image height="40" width="40" src={Icons} alt="Next button"/>
          </Button>
        </Block>
      </Flex>
    </>
  );
};

export default CarouselButtons;

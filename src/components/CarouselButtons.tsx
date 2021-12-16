import React from "react";
import { Flex, Button, Block } from "vcc-ui";
import Icons from "../../docs/chevron-circled.svg";

interface Props {
    slideRef: {
        current : any;
    };
  }

const CarouselButtons : React.FC<Props>  = ({ slideRef }) => {
  const next = () => {
    slideRef.current.slickNext();
  };
  const previous = () => {
    slideRef.current.slickPrev();
  };

  return (
    <>
      <Flex extend={{ display: "flex", flexDirection: "row" }}>
        <Block extend={{ flexGrow: 1 }}></Block>
        <Block extend={{ display: "flex", flexDirection: "row" }}>
          <Button size="small" variant="text" onClick={next}>
            Prev
          </Button>
          <Button size="small" variant="text" onClick={previous}>
            Next
          </Button>
        </Block>
      </Flex>
    </>
  );
};

export default CarouselButtons;

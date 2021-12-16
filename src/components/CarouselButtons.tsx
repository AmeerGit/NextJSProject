import React from "react";
import { extend, Flex, Button, Block } from "vcc-ui";
import Icons from '../../docs/chevron-circled.svg'

const CarouselButtons = () => {
  return (
    <>
      <Flex extend={{ display: "flex", flexDirection: "row" }}>
        <Block></Block>
        <Block extend={{ display: "flex", flexDirection: "row" }}>
          <Button size="small" variant="text">
            <img
              src={Icons}
              alt='icons'
              width="100%"
              height="250"
            />
          </Button>
          <Button size="small" variant="text">
            <img
              src={Icons}
              alt='icons'
              width="100%"
              height="250"
            />
          </Button>
        </Block>
      </Flex>
    </>
  );
};

export default CarouselButtons;

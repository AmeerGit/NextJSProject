import React from "react";
import { Flex, Button, Block, ExtendCSS, Click, Spacer } from "vcc-ui";
import Icons from "../../docs/chevron-circled.svg";
import Image from "next/image";

interface Props {
  slideRef: {
    current: any;
  };
}

const CarouselButtons: React.FC<Props> = ({ slideRef }) => {
  const next = () => {
    slideRef.current.slickNext();
  };
  const previous = () => {
    slideRef.current.slickPrev();
  };

  return (
    <Flex extend={rootCSS} >
      <Click onClick={previous}>
        <Image
          height="40"
          width="40"
          src={Icons}
          alt="Previous button"
          className="reverseIcon"
        />
      </Click>
      <Spacer />
      <Click onClick={next}>
        <Image height="40" width="40" src={Icons} alt="Next button" />
      </Click>
    </Flex>
  );
};

const rootCSS: ExtendCSS = ({ theme: { color } }) => ({
  flexDirection: "row",
  alignSelf: "auto",
  justifyContent: "flex-end",
  margin : '2rem',
  "& button": {
    color: color.foreground.primary,
    display: "flex",
    alignItems: "center",
  },
  onlyM: {
    display: 'none',
  },
});

export default CarouselButtons;

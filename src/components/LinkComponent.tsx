import React from "react";
import { Block, extend, Flex, Link } from "vcc-ui";

const LinkComponent = ({id}) => {
  return (
    <Flex extend={{display : 'flex' , flexDirection : 'row' , justifyContent: 'space-evenly'}}>
      <Link href={`https://www.volvocars.com/se/learn/${id}`} arrow="right">
        READ MORE
      </Link>
      <Link href={`https://www.volvocars.com/se/shop/${id}`} arrow="right">
        SHOP
      </Link>
    </Flex>
  );
};

export default LinkComponent;

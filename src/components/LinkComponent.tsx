import React from "react";
import { Flex, Link } from "vcc-ui";
import Routing from "next/Link";
interface LinkProps {
  id: String;
}

const LinkComponent: React.FC<LinkProps> = ({ id }) => {
  return (
    <Flex
      extend={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Link arrow="right">
        <Routing href={`/learn/${id}`} >READ MORE</Routing>
      </Link>
      <Link  arrow="right">
        <Routing href={`/shop/${id}`}>SHOP</Routing>
      </Link>
    </Flex>
  );
};

export default LinkComponent;

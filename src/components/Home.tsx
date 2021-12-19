import React, { useEffect, useRef, useState } from "react";
// Import carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from "../services/data";
import CarListComponent from "./CarListComponent";
import { View } from "vcc-ui";

const Home: React.FC = () => {
  const [carsList, setCarsList] = useState([]);
  const slideRef = useRef(null);

  useEffect(() => {
    // API call to get the Cars list
    fetchData()
      .then((res) => setCarsList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View
      extend={{
        margin: "auto",
        marginTop: "10em",
        width: "98%",
      }}
    >
      <CarListComponent carsList={carsList} slideRef={slideRef} />
    </View>
  );
};

export default Home;

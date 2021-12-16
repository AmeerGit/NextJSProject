import  Home  from "../src/components/Home";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';

function HomePage() {
  return (
    <StyleProvider>
    <ThemePicker variant="light">
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;

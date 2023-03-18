import { useState, useEffect } from "react";
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
} from "./const-breakpoints";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentScreen, setCurrentScreen] = useState("SCREEN_SM");

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= SCREEN_XXL) {
		setCurrentScreen("SCREEN_XXL");
    } else if (width >= SCREEN_XL) {
		setCurrentScreen("SCREEN_XL");
    } else if (width >= SCREEN_LG) {
		setCurrentScreen("SCREEN_LG");
    } else if (width >= SCREEN_MD) {
		setCurrentScreen("SCREEN_MD");
    } else {
		setCurrentScreen("SCREEN_SM");
    }
  }, [width]);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
    currentScreen: currentScreen,
  };
};

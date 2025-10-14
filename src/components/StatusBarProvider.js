// src/contexts/StatusBarContext.js
import React, {createContext, useState, useContext, useEffect} from "react";
import {StatusBar} from "react-native";

const StatusBarContext = createContext({
  color: "#FFFFFF",
  style: "dark-content",
  setStatusBar: () => {},
});

export const StatusBarProvider = ({children}) => {
  const [statusBarColor, setStatusBarColor] = useState("#FFFFFF");
  const [barStyle, setBarStyle] = useState("dark-content");

  useEffect(() => {
    StatusBar.setBackgroundColor(statusBarColor, true);
    StatusBar.setBarStyle(barStyle, true);
  }, [statusBarColor, barStyle]);

  const setStatusBar = (color, style) => {
    setStatusBarColor(color);
    setBarStyle(
      style ||
        (color === "#FFFFFF" || color === "#E5F6FE"
          ? "dark-content"
          : "light-content"),
    );
  };

  return (
    <StatusBarContext.Provider
      value={{color: statusBarColor, style: barStyle, setStatusBar}}>
      {children}
    </StatusBarContext.Provider>
  );
};

export const useStatusBar = () => useContext(StatusBarContext);

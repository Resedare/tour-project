import React, { createContext, useContext, useState } from "react";
import toursData from "../../assets/data/tours.json";

const ToursContext = createContext();
export const useTours = () => useContext(ToursContext);

export const ToursProvider = ({ children }) => {
  const [data, setData] = useState(toursData);

  return <ToursContext.Provider value={data}>{children}</ToursContext.Provider>;
};

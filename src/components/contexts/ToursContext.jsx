import React, { createContext, useState } from "react";
import toursData from "@assets/data/tours.json";

const ToursContext = createContext();

export const ToursProvider = ({ children }) => {
  const [data, setData] = useState(toursData);

  return <ToursContext.Provider value={data}>
    {children}
  </ToursContext.Provider>;
};

export default ToursContext;
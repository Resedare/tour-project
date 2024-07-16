import { useContext } from "react";
import ToursContext from "../contexts/ToursContext";

export const useTours = () => useContext(ToursContext);

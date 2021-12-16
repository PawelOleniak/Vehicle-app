import { createContext, useState, useEffect } from 'react';
import { initialX, initialY } from 'Constants';
export const Context = createContext();

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState();

  const [selectedXValue, setSelectedXLabel] = useState();
  const [selectedYValue, setSelectedYLabel] = useState();
  const [hoveredCar, setHoveredCar] = useState(null);
  const [additionalFilter, setAdditionalFilter] = useState();

  useEffect(() => {
    setSelectedXLabel(initialX);
    setSelectedYLabel(initialY);
    setDarkMode(true);
    setHoveredCar(null);
    setAdditionalFilter(null);
  }, []);

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const ContextValue = {
    selectedXValue,
    setSelectedXLabel,
    selectedYValue,
    setSelectedYLabel,
    hoveredCar,
    setHoveredCar,
    additionalFilter,
    setAdditionalFilter,
    darkMode,
    handleSetDarkMode,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;

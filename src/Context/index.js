import { createContext, useState, useEffect } from 'react';
import { initialX, initialY } from 'Constants';
import { useMediaQuery } from 'react-responsive';
export const Context = createContext();

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState();
  const isBigScreen = useMediaQuery({ minWidth: 1000 });
  const isSmallScreen = useMediaQuery({ maxWidth: 500 });
  const [selectedXValue, setSelectedXLabel] = useState();
  const [selectedYValue, setSelectedYLabel] = useState();
  const [hoveredCar, setHoveredCar] = useState(null);
  const [additionalFilter, setAdditionalFilter] = useState();

  useEffect(() => {
    setSelectedXLabel(initialX);
    setSelectedYLabel(initialY);
    setDarkMode(false);
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
    isBigScreen,
    isSmallScreen,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;

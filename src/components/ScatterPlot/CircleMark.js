import React, { useContext } from 'react';
import { Context } from 'Context';
const CircleMark = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  circleRadius,
  hoveredCar: hoveredCarIndex,
  setHoveredCar,
  freeze,
}) => {
  const { additionalFilter: filter, darkMode } = useContext(Context);
  const mode = darkMode ? 'darkMark' : 'mark';
  return data.map((el, index) => (
    <circle
      key={el.name + el.year + el.weight}
      className={index === hoveredCarIndex ? 'selectedMark' : mode}
      cx={xScale(xValue(el))}
      cy={yScale(yValue(el))}
      display={filter && el[filter[0]] !== filter[1] ? 'none' : 'unset'}
      r={index === hoveredCarIndex ? circleRadius + 1 : circleRadius}
      onMouseOver={() => setHoveredCar(index)}
      onTouchMove={() => setHoveredCar(index)}
      onClick={freeze}
    />
  ));
};

export default CircleMark;

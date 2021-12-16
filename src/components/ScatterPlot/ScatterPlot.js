import React, { useState, useContext } from 'react';
import CircleMark from './CircleMark';
import { format } from 'd3';
import { AxisBottom, AxisLeft } from '../Axis';
import { Context } from 'Context';
import { capitalizeFirstLetter } from 'helpers';
import { yAxisLabelOffset, xAxisLabelOffset } from 'Constants';
import './ScatterPlot.css';

const ScatterPlot = ({ data, height, width, xValue, yValue, xScale, yScale, selectedXValue, selectedYValue }) => {
  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue);
  const [isFreezed, setIsFreezed] = useState(false);

  const { hoveredCar, setHoveredCar } = useContext(Context);

  return (
    <>
      <AxisBottom xScale={xScale} innerHeight={height} tickFormat={xAxisTickFormat} tickOffset={5} />
      <text
        className="axis-label"
        textAnchor="middle"
        transform={`translate(${-yAxisLabelOffset},${height / 2}) rotate(-90)`}
      >
        {capitalizeFirstLetter(selectedYValue)}
      </text>
      <text className="axis-label" x={width / 2} y={height + xAxisLabelOffset} textAnchor="middle">
        {capitalizeFirstLetter(selectedXValue)}
      </text>
      <AxisLeft yScale={yScale} innerWidth={width} tickOffset={10} />
      <CircleMark
        className="mark"
        data={data}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        circleRadius={2.1}
        hoveredCar={hoveredCar}
        freeze={() => setIsFreezed(!isFreezed)}
        setHoveredCar={!isFreezed ? setHoveredCar : () => {}}
      />
    </>
  );
};

export default ScatterPlot;

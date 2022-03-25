import React, { useState, useContext } from 'react';
import CircleMark from './CircleMark';
import { format } from 'd3';
import { AxisBottom, AxisLeft } from '../Axis';
import { Context } from 'Context';
import { capitalizeFirstLetter } from 'helpers';
import { yAxisLabelOffset, xAxisLabelOffset, mobileScaleMultipier } from 'Constants';
import './ScatterPlot.css';

const ScatterPlot = ({ data, height, width, xValue, yValue, xScale, yScale, selectedXValue, selectedYValue }) => {
  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue);
  const [isFreezed, setIsFreezed] = useState(false);

  const { hoveredCar, setHoveredCar, isBigScreen } = useContext(Context);
  const mult = isBigScreen ? 1 : mobileScaleMultipier;
  return (
    <>
      <AxisBottom
        isBigScreen={isBigScreen}
        xScale={xScale}
        innerHeight={height}
        tickFormat={xAxisTickFormat}
        tickOffset={5}
      />
      <text
        className={'axis-label ' + (isBigScreen ? '' : 'axis-label-mobile')}
        textAnchor="middle"
        transform={`translate(${-yAxisLabelOffset * mult},${height / 2}) rotate(-90)`}
      >
        {capitalizeFirstLetter(selectedYValue)}
      </text>
      <text
        className={'axis-label ' + (isBigScreen ? '' : 'axis-label-mobile')}
        x={width / 2}
        y={height + xAxisLabelOffset * mult}
        textAnchor="middle"
      >
        {capitalizeFirstLetter(selectedXValue)}
      </text>
      <AxisLeft isBigScreen={isBigScreen} yScale={yScale} innerWidth={width} tickOffset={10} />
      <CircleMark
        data={data}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        circleRadius={isBigScreen ? 2 : 1.6}
        hoveredCar={hoveredCar}
        freeze={() => setIsFreezed(!isFreezed)}
        setHoveredCar={!isFreezed ? setHoveredCar : () => {}}
      />
    </>
  );
};

export default ScatterPlot;

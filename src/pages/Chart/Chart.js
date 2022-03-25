import React from 'react';
import { ScatterPlot } from 'components';
import { scaleLinear, extent } from 'd3';
import { innerWidth, innerHeight, xAxisPlotPadding, yAxisPlotPadding, xMargin, yMargin } from 'Constants';

import './Chart.css';

const Chart = ({
  data: [numericLabels, stringLabels, data],
  selectedXValue,
  selectedYValue,
  isBigScreen,
  isSmallScreen,
}) => {
  const xValue = (d) => +d[selectedXValue];
  const yValue = (d) => +d[selectedYValue];

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth - xAxisPlotPadding])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue).reverse())
    .range([0, innerHeight - yAxisPlotPadding])
    .nice();

  return (
    <div className={isBigScreen ? '' : isSmallScreen ? 'container-small' : 'container-medium'}>
      <svg width={innerWidth + 2 * xMargin} height={innerHeight + 2 * yMargin}>
        <g transform={`translate(${xMargin * 1.2},${yMargin})`}>
          {data ? (
            <ScatterPlot
              numericLabels={numericLabels}
              stringLabels={stringLabels}
              data={data}
              width={innerWidth}
              height={innerHeight}
              selectedXValue={selectedXValue}
              selectedYValue={selectedYValue}
              xValue={xValue}
              yValue={yValue}
              xScale={xScale}
              yScale={yScale}
            />
          ) : null}
        </g>
      </svg>
    </div>
  );
};

export default Chart;

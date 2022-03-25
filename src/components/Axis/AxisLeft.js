const AxisLeft = ({ yScale, innerWidth, tickOffset = 3, isBigScreen }) =>
  yScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      className={isBigScreen ? 'tick ' : 'tick-mobile'}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      <text key={tickValue} style={{ textAnchor: 'end' }} x={-tickOffset} dy=".32em">
        {tickValue}
      </text>
    </g>
  ));
export default AxisLeft;

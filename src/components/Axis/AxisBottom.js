import './Axis.css';
const AxisBottom = ({ xScale, innerHeight, tickOffset = 3, isBigScreen }) =>
  xScale.ticks().map((tickValue) => (
    <g
      className={isBigScreen ? 'tick ' : 'tick-mobile'}
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} />
      <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
        {tickValue}
      </text>
    </g>
  ));
export default AxisBottom;

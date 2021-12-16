import { useContext } from 'react';
import { Chart } from 'pages';
import { LoadingIndicator, SelectOptions, VehicleDetails } from 'components';
import ContextProvider, { Context } from 'Context';

import { useData, capitalizeFirstLetter } from 'helpers';

import './App.css';

function App() {
  const [numericLabels, stringLabels, data] = useData();

  const options = numericLabels ? numericLabels.map((el) => ({ value: el, label: capitalizeFirstLetter(el) })) : null;
  const { selectedXValue, selectedYValue, hoveredCar, setHoveredCar, setSelectedXLabel, setSelectedYLabel, darkMode } =
    useContext(Context);

  const handleChangeX = (selectedOption) => {
    setSelectedXLabel(selectedOption.value);
  };
  const handleChangeY = (selectedOption) => {
    setSelectedYLabel(selectedOption.value);
  };

  return (
    <div className={darkMode ? 'darkMode' : 'lightMode'}>
      <div className="mainContainer">
        {data ? null : <LoadingIndicator />}
        {data ? (
          <div className="menuContainer">
            <SelectOptions
              selectedYValue={selectedYValue}
              handleChangeY={handleChangeY}
              handleChangeX={handleChangeX}
              selectedXValue={selectedXValue}
              options={options}
            />
          </div>
        ) : null}
        {data ? (
          <Chart
            data={[numericLabels, stringLabels, data]}
            selectedXValue={selectedXValue}
            selectedYValue={selectedYValue}
            hoveredCar={hoveredCar}
            setHoveredCar={setHoveredCar}
          />
        ) : null}
      </div>

      <VehicleDetails hoveredCar={hoveredCar} data={data} />
    </div>
  );
}
function RootApp() {
  return (
    <ContextProvider>
      <App />;
    </ContextProvider>
  );
}

export default RootApp;

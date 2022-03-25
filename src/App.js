import { useContext, useState } from 'react';
import { Chart } from 'pages';
import { AddVehicleForm, LoadingIndicator, SelectOptions, VehicleDetails } from 'components';
import ContextProvider, { Context } from 'Context';
import { HiSun, HiMoon } from 'react-icons/hi';

import { capitalizeFirstLetter } from 'helpers';

import './App.css';
import Modal from 'components/Modal/Modal';
import useData from 'hooks/useData';

function App() {
  const [numericLabels, stringLabels, data] = useData();

  const options = numericLabels ? numericLabels.map((el) => ({ value: el, label: capitalizeFirstLetter(el) })) : null;
  const {
    selectedXValue,
    selectedYValue,
    hoveredCar,
    setHoveredCar,
    setSelectedXLabel,
    setSelectedYLabel,
    darkMode,
    handleSetDarkMode,
    isBigScreen,
    isSmallScreen,
  } = useContext(Context);

  const handleChangeX = (selectedOption) => {
    setSelectedXLabel(selectedOption.value);
  };
  const handleChangeY = (selectedOption) => {
    setSelectedYLabel(selectedOption.value);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="appWrapper">
      <div className={darkMode ? 'darkMode' : 'lightMode'} />
      <div className="switchContainer" onClick={handleSetDarkMode}>
        {darkMode ? <HiMoon size={50} className={'icon'} /> : <HiSun size={50} className={'icon'} />}
      </div>
      <div className={'mainContainer ' + (isBigScreen ? '' : ' mainContainerMobile')}>
        {data ? null : (
          <div className="loadingIndicatorWrapper">
            <LoadingIndicator />
          </div>
        )}
        {data ? (
          <div className="menuContainer">
            <SelectOptions
              selectedYValue={selectedYValue}
              handleChangeY={handleChangeY}
              handleChangeX={handleChangeX}
              selectedXValue={selectedXValue}
              options={options}
            />
            <button className="button" onClick={() => setIsFormOpen(!isFormOpen)}>
              Add a vehicle
            </button>
          </div>
        ) : null}
        {data ? (
          <Chart
            data={[numericLabels, stringLabels, data]}
            selectedXValue={selectedXValue}
            selectedYValue={selectedYValue}
            hoveredCar={hoveredCar}
            setHoveredCar={setHoveredCar}
            isBigScreen={isBigScreen}
            isSmallScreen={isSmallScreen}
          />
        ) : null}
      </div>

      <VehicleDetails hoveredCar={hoveredCar} data={data} />

      {isFormOpen ? (
        <Modal handleClose={setIsFormOpen}>
          <AddVehicleForm numericLabels={numericLabels} stringLabels={stringLabels} lastIndex={data.length} />
        </Modal>
      ) : null}
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

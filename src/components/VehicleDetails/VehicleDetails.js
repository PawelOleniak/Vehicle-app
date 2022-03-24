import React, { useContext } from 'react';
import { Context } from 'Context';
import { capitalizeFirstLetter } from 'helpers';
import './VehicleDetails.css';
const VehicleDetails = ({ hoveredCar: vehicle, data }) => {
  const { additionalFilter, setAdditionalFilter, darkMode } = useContext(Context);
  const isselected = (value) => additionalFilter && value === additionalFilter[1];

  return (
    <div className={'detailsContainer ' + (darkMode ? 'dark' : 'light')}>
      {vehicle !== null ? (
        <div>
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h4>Selected Vehicle</h4>
            <p>To freeze chart click on car-circle</p>
          </div>

          <div className="details">
            {Object.entries(data[vehicle])
              .reverse()
              .map(([key, value]) => (
                <div className="detail" key={key}>
                  <span
                    style={isselected(value) ? { color: `red` } : null}
                    onClick={() => setAdditionalFilter([key, value])}
                  >
                    {capitalizeFirstLetter(key)}: <b>{value}</b>
                  </span>
                  {!isselected(value) ? (
                    <button className="addFilterButton" onClick={() => setAdditionalFilter([key, value])}>
                      +
                    </button>
                  ) : (
                    <button className="removeFilterButton" onClick={() => setAdditionalFilter(null)}>
                      -
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div style={{ width: `100%`, textAlign: `center` }}>Select Vehicle on chart</div>
      )}
    </div>
  );
};

export default VehicleDetails;

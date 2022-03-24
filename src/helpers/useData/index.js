import { useState, useEffect } from 'react';
import { MockedOfflineData } from './MockedOfflineData';

const csvUrl =
  'https://gist.githubusercontent.com/PawelOleniak/2eb9de69fb3e0c503d7a4771a1ea3c7f/raw/b68c2d72395ec54daee81f65a8d36e9010ac88bf/productionDB.csv';
const useData = () => {
  const [data, setData] = useState(null);
  const [numericLabels, setNumericLabels] = useState(null);
  const [stringLabels, setStringLabels] = useState(null);
  const [isOffline, setIsOffline] = useState(false);

  const getUsers = () => {
    fetch(`/api/vehicles/all`)
      .then((response) => response.json())
      .then((users) => {
        setData(users);
        let labels = Object.entries(users[0]).map((el) => el[0]);
        setNumericLabels(labels.slice(0, -2));
        setStringLabels(labels.slice(2));
      });
  };
  const getUsersOffline = () => {
    setData(MockedOfflineData);
    let labels = Object.entries(MockedOfflineData[0]).map((el) => el[0]);
    setNumericLabels(labels.slice(0, -2));
    setStringLabels(labels.slice(2));
  };

  useEffect(() => (isOffline ? getUsersOffline() : getUsers()), []);

  return [numericLabels, stringLabels, data];
};

export default useData;

import { useState, useEffect, useCallback } from 'react';
import { csvParse } from 'd3';
const csvUrl =
  'https://gist.githubusercontent.com/PawelOleniak/2eb9de69fb3e0c503d7a4771a1ea3c7f/raw/b68c2d72395ec54daee81f65a8d36e9010ac88bf/productionDB.csv';
const useData = () => {
  const [data, setData] = useState(null);
  const [numericLabels, setNumericLabels] = useState(null);
  const [stringLabels, setStringLabels] = useState(null);

  const fetchText = useCallback(async (url) => {
    const response = await fetch(url);
    return await response.text();
  }, []);

  useEffect(() => {
    //mocking a large database/throatting
    setTimeout(function () {
      fetchText(csvUrl).then((text) => {
        const labels = text.split('\n')[0].split(',');
        setNumericLabels(labels.slice(0, -2));
        setStringLabels(labels.slice(-2));
        setData(csvParse(text));
      });
    }, 1500);
  }, [fetchText]);
  return [numericLabels, stringLabels, data];
};

export default useData;

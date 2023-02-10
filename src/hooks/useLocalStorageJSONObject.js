import React, { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [data, _setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      _setData(storedData);
    }
  }, []);

  const setData = (newData) => {
    localStorage.setItem(key, newData);
    _setData(newData);
  };

  return [data, setData];
};

export const useLocalStorageJSONObject = (key) => {
  const [dataStr, setDataStr] = useLocalStorage(key);

  const dataObj = dataStr ? JSON.parse(dataStr) : null;
  const setDataObj = (newDataObj) => {
    setDataStr(JSON.stringify(newDataObj));
  };

  return [dataObj, setDataObj];
};

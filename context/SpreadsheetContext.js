import { createContext, useState } from 'react';

export const SpreadsheetContext = createContext();

export const SpreadsheetProvider = ({ children }) => {
  const [data, setData] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(''))
  );

  const updateCell = (row, col, value) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return (
    <SpreadsheetContext.Provider value={{ data, updateCell }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

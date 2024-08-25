import { useContext } from 'react';
import { SpreadsheetContext } from '../context/SpreadsheetContext';

const Spreadsheet = () => {
  const { data, updateCell } = useContext(SpreadsheetContext);

  return (
    <div className="p-4">
      <table className="border-collapse border border-gray-400">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-2">
                  <input
                    className="w-full h-full p-1 text-center focus:outline-none"
                    value={cell}
                    onChange={(e) =>
                      updateCell(rowIndex, colIndex, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;

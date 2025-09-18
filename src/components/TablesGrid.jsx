import React from "react";
import "../styles/TablesGrid.css";
const TablesGrid = ({ tables, selectedTable, setSelectedTable }) => {
  return (
    <div className="tables">
      {tables.map((table) => (
        <button
          key={table}
          className={`table-btn ${selectedTable === table ? "active-table" : ""}`}
          onClick={() => setSelectedTable(table)}
        >
          {table}
        </button>
      ))}
    </div>
  );
};

export default TablesGrid;

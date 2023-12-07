import React from "react";
import "../css/filterStatusList.css";

interface FilterStatusListProps {
  statuses: string[];
  selectedOptions: string[];
  handleSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterStatusList: React.FC<FilterStatusListProps> = ({
  statuses,
  selectedOptions,
  handleSelectChange,
}) => {
  return (
    <div className="filter-status-container">
      {statuses.map((status) => (
        <div key={status} className="filter-status-item">
          <input
            type="checkbox"
            id={status}
            value={status}
            checked={selectedOptions.includes(status)}
            onChange={handleSelectChange}
          />
          <label htmlFor={status}>{status}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterStatusList;

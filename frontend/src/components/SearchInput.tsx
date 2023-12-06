import React from "react";
import "../css/searchInput.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchInput;

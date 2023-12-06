import React from "react";
import "../css/dropdown.css";
interface DropdownProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  children: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  isOpen,
  onClick,
  children,
}) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-trigger" onClick={onClick}>
        <label className="dropdown-container-label">{label}</label>
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;

import React, { useState, useEffect } from "react";
import { Employee, Status } from "../types";
import Header from "./Header";
import StatusUpdate from "./StatusUpdate";
import Dropdown from "./Dropdown";
import FilterStatusList from "./FilterStatusList";
import SearchInput from "./SearchInput";
import EmployeeList from "./EmployeeList";
import "../css/main.css";
import axiosInstance from "../api/axiosInstance";

interface MainProps {
  token: string | null;
  user: Employee;
  onLogout: () => void;
}

const Main: React.FC<MainProps> = ({ token, user, onLogout }) => {
  const [employeeName, setEmployeeName] = useState<string>("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<string>(user.status);

  const statuses = [
    Status.WORKING,
    Status.WORKING_REMOTELY,
    Status.BUSINESS_TRIP,
    Status.ON_VACATION,
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axiosInstance.get("/employees");
        setEmployees(res.data.employees);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployees();
  }, [token]);

  const handleUpdateStatus = async (id: string, status: string) => {
    const employee = employees.find((e) => e._id === id);
    const employeeToUpdate = { ...employee, status };
    try {
      const res = await axiosInstance.put(`/employees/${id}`, {
        employee: employeeToUpdate,
      });
      setEmployees(res.data.employees);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedSelection);
  };

  const filteredEmployees = employees?.filter((e: Employee) =>
    e.username.toLowerCase().includes(employeeName.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="centered-div">
      <Header onLogout={onLogout} user={user} newStatus={newStatus} />
      <StatusUpdate
        user={user}
        statuses={statuses}
        handleUpdateStatus={handleUpdateStatus}
        setNewStatus={setNewStatus}
        newStatus={newStatus}
      />
      <hr />
      <div className="flex-container">
        <SearchInput value={employeeName} onChange={setEmployeeName} />
        <Dropdown
          label="Filter by status:"
          isOpen={isDropdownOpen}
          onClick={toggleDropdown}
        >
          <FilterStatusList
            statuses={statuses}
            selectedOptions={selectedOptions}
            handleSelectChange={handleSelectChange}
          />
        </Dropdown>
      </div>
      <EmployeeList
        user={user}
        selectedOptions={selectedOptions}
        employees={filteredEmployees}
      />
    </div>
  );
};

export default Main;

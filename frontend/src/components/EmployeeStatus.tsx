import { Employee } from "../types";
import "../css/employeeStatus.css";
interface EmployeeStatusProps {
  employee: Employee;
  selectedOptions: string[];
  user: Employee;
}
const EmployeeStatus: React.FC<EmployeeStatusProps> = ({
  employee,
  selectedOptions,
  user,
}) => {
  return (
    <div
      key={employee._id}
      className={`employee-item`}
      style={{
        background:
          employee.status === "On Vacation"
            ? "grey"
            : user._id === employee._id
            ? "#C1FFD5"
            : "none",
        display:
          selectedOptions.length === 0 ||
          selectedOptions.includes(employee.status)
            ? "flex"
            : "none",
      }}
    >
      {employee.username + " "}
      <span>{"(" + employee.status + ")"}</span>
    </div>
  );
};

export default EmployeeStatus;

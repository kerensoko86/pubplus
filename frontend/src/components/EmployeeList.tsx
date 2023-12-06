import { Employee } from "../types";
import EmployeeStatus from "./EmployeeStatus";

interface EmployeeListProps {
  employees: Employee[];
  selectedOptions: string[];
  user: Employee;
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  selectedOptions,
  employees,
  user,
}) => {
  return (
    <div className="employee-list ">
      {employees.length > 0 &&
        employees.map((employee) => (
          <EmployeeStatus
            user={user}
            key={employee._id}
            employee={employee}
            selectedOptions={selectedOptions}
          />
        ))}
    </div>
  );
};

export default EmployeeList;

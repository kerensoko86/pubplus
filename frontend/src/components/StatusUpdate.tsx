import { Employee } from "../types";
import "../css/statusUpdate.css";

interface StatusUpdateProps {
  handleUpdateStatus: (id: string, status: string) => void;
  user: Employee;
  statuses: string[];
  setNewStatus: (e: any) => void;
  newStatus: string;
}

const StatusUpdate: React.FC<StatusUpdateProps> = ({
  handleUpdateStatus,
  user,
  statuses,
  setNewStatus,
  newStatus,
}) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value;
    setNewStatus(selectedStatus);
    handleUpdateStatus(user._id, selectedStatus);
  };

  return (
    <div className="status-update">
      <label>Update My Current Status:</label>
      <select onChange={handleStatusChange} value={newStatus || ""}>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusUpdate;

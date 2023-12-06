import { Employee } from "../types";
import "../css/header.css";

const Header: React.FC<{
  user: Employee;
  newStatus: string | undefined;
  onLogout: () => void;
}> = ({ user, newStatus, onLogout }) => {
  return (
    <>
      {" "}
      <button onClick={onLogout}>Logout</button>
      <h2>
        Hello {user.gender} {user.username}, you are{" "}
        <span className="new-status">{newStatus}</span>.
      </h2>
    </>
  );
};

export default Header;

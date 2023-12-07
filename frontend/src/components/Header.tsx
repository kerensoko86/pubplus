import { Employee } from "../types";
import "../css/header.css";

interface HeaderProps {
  user: Employee;
  newStatus: string | undefined;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, newStatus, onLogout }) => {
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

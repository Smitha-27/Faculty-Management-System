import "../styles/sidebar.css";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">
        FMS
      </h2>

      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/faculty">
            Faculty
          </Link>
        </li>

        <li>
          <Link to="/attendance">
            Attendance
          </Link>
        </li>

       <li>
          <Link to="/leave">
          Leave
          </Link>
        </li>

      </ul>

    </div>
  );
}
export default Sidebar;


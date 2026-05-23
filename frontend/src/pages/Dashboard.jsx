import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import "../styles/dashboard.css";

function Dashboard() {

  const [facultyList, setFacultyList] = useState([]);

  const [filteredFaculty, setFilteredFaculty] = useState([]);

  const [department, setDepartment] = useState("");

  // FETCH FACULTY

  useEffect(() => {

    fetchFaculty();

  }, []);

  const fetchFaculty = async () => {

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/faculty`
      );

      const data = await response.json();

      setFacultyList(data);

      setFilteredFaculty(data);

    } catch (error) {

      console.log(error);
    }
  };

  // FILTER DEPARTMENT

  const handleDepartmentChange = (e) => {

    const selectedDept = e.target.value;

    setDepartment(selectedDept);

    if (selectedDept === "") {

      setFilteredFaculty(facultyList);

    } else {

      const filtered = facultyList.filter(

        (faculty) =>
          faculty.department === selectedDept
      );

      setFilteredFaculty(filtered);
    }
  };

  // UNIQUE DEPARTMENTS

  const departments = [

    ...new Set(

      facultyList.map(
        (faculty) => faculty.department
      )
    )
  ];

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        {/* HEADER */}

        <div className="dashboard-header">

          <h1>
            Faculty Dashboard
          </h1>

          <p>
            Manage faculty records efficiently
          </p>

        </div>

        {/* CARDS */}

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <h3>Total Faculty</h3>

            <p>{facultyList.length}</p>

          </div>

          <div className="dashboard-card">

            <h3>Departments</h3>

            <p>{departments.length}</p>

          </div>

        </div>

        {/* SEARCH */}

        <div className="search-container">

          <h2>
            Filter by Department
          </h2>

          <select
            value={department}
            onChange={handleDepartmentChange}
          >

            <option value="">
              All Departments
            </option>

            {departments.map((dept, index) => (

              <option
                key={index}
                value={dept}
              >
                {dept}
              </option>

            ))}

          </select>

        </div>

        {/* TABLE */}

        <div className="table-container">

          <h2>
            Faculty Details
          </h2>

          <table>

            <thead>

              <tr>

                <th>Name</th>

                <th>Department</th>

                <th>Email</th>

              </tr>

            </thead>

            <tbody>

              {filteredFaculty.map((faculty) => (

                <tr key={faculty._id}>

                  <td>{faculty.name}</td>

                  <td>{faculty.department}</td>

                  <td>{faculty.email}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;

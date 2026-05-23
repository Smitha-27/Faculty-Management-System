import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";

import FacultyTable from "../components/FacultyTable";

import "../styles/faculty.css";

function Faculty() {

  const [facultyList, setFacultyList] =
    useState([]);

  const [name, setName] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [editId, setEditId] =
    useState(null);

  // LOAD FACULTY FROM BACKEND
  useEffect(() => {

    getFaculty();

  }, []);

  // GET FACULTY
  const getFaculty = async () => {

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/faculty`
    );

    const data =
      await response.json();

    setFacultyList(data);
  };

  // ADD OR UPDATE FACULTY
  const handleSubmit = async () => {

    const facultyData = {
      name,
      department,
      email
    };

    // UPDATE
    if (editId) {

      await fetch(
        `${import.meta.env.VITE_API_URL}/api/faculty/${editId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(
            facultyData
          )
        }
      );

      setEditId(null);

    }

    // ADD
    else {

      await fetch(
        `${import.meta.env.VITE_API_URL}/api/faculty`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(
            facultyData
          )
        }
      );
    }

    // REFRESH DATA
    getFaculty();

    // CLEAR INPUTS
    setName("");

    setDepartment("");
    setEmail("");
  };

  // DELETE FACULTY
  const deleteFaculty = async (id) => {

    await fetch(
      `${import.meta.env.VITE_API_URL}/api/faculty/${id}`,
      {
        method: "DELETE"
      }
    );
    getFaculty();
  };

  // EDIT FACULTY
  const editFaculty = (faculty) => {
    setName(faculty.name);
    setDepartment(
      faculty.department
    );
    setEmail(faculty.email);
    setEditId(faculty._id);
  };
  return (
    <div className="layout">

      <Sidebar />
      <div className="faculty-content">
        <h1>
          Faculty Management
        </h1>

        <div className="faculty-form">

          <input
            type="text"
            placeholder="Faculty Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button
            onClick={handleSubmit}
          >

            {editId
              ? "Update Faculty"
              : "Add Faculty"}

          </button>

        </div>

        <FacultyTable
          facultyList={facultyList}
          deleteFaculty={
            deleteFaculty
          }
          editFaculty={
            editFaculty
          }
        />

      </div>

    </div>
  );
}

export default Faculty;



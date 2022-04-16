import React, { useContext } from "react";
import { studentContext } from "../context";

const Form = () => {
  const value = useContext(studentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addHandler = () => {
    if (value.student) {
      const newStudent = {
        id: Math.floor(Math.random() * 10000),
        name: value.student,
      };

      value.setStudentList([...value.studentList, newStudent]);
      value.setStudent("");
    } else {
      alert("Please Enter a Valid Name.");
    }
  };
  const updateHandler = () => {
    value.editableStudent.name = value.student;
    value.setStudent("");
    value.setEditStudent(false);
    value.setEditableStudent(null);
  };
  return (
    <div className="form">
      <h1>Student Attendance Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={value.student}
          onChange={(e) => value.setStudent(e.target.value)}
        />
        <button onClick={value.editStudent ? updateHandler : addHandler}>
          {value.editStudent ? "Update" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default Form;

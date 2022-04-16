import React, { useContext } from "react";
import { studentContext } from "../context";

const AbsentStudent = ({ toggleIsPresent }) => {
  const { studentList } = useContext(studentContext);

  return (
    <div className="absent_student">
      <h3>Absent</h3>
      <ul>
        {studentList
          .filter((student) => student.isPresent === false)
          .map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button
                className="accd_btn"
                onClick={() => toggleIsPresent(item.id)}
              >
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentStudent;

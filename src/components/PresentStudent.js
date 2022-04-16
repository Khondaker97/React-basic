import React, { useContext } from "react";
import { studentContext } from "../context";

const PresentStudent = ({ toggleIsPresent }) => {
  const { studentList } = useContext(studentContext);
  return (
    <div className="present_student">
      <h3>Present</h3>
      <ul>
        {studentList
          .filter((student) => student.isPresent === true)
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

export default PresentStudent;

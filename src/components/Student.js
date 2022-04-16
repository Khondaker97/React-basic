import React, { useContext } from "react";
import AllStudent from "./AllStudent";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";
import { studentContext } from "../context";

const Student = () => {
  const { studentList, setStudentList } = useContext(studentContext);

  const toggleIsPresent = (id) => {
    const student = studentList.find((item) => item.id === id);
    student.isPresent = !student.isPresent;
    setStudentList([...studentList]);
  };
  return (
    <div className="student">
      <AllStudent />
      <PresentStudent toggleIsPresent={toggleIsPresent} />
      <AbsentStudent toggleIsPresent={toggleIsPresent} />
    </div>
  );
};

export default Student;

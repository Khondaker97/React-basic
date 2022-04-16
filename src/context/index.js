import { createContext, useState } from "react";

export const studentContext = createContext();

export const StudentProvider = (props) => {
  const [student, setStudent] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editStudent, setEditStudent] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const value = {
    student,
    setStudent,
    studentList,
    setStudentList,
    editStudent,
    setEditStudent,
    editableStudent,
    setEditableStudent,
  };

  return (
    <studentContext.Provider value={value}>
      {props.children}
    </studentContext.Provider>
  );
};
export default StudentProvider;

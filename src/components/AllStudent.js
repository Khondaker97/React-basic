import { useContext } from "react";
import { studentContext } from "../context";

const AllStudent = () => {
  const value = useContext(studentContext);

  const editHandler = (id) => {
    value.setEditStudent(true);
    const updateId = value.studentList.find((student) => student.id === id);
    value.setEditableStudent(updateId);
    value.setStudent(updateId.name);
  };

  const deleteHandler = (id) => {
    const newList = value.studentList.filter((student) => student.id !== id);
    value.setStudentList(newList);
  };

  const presentHandler = (id) => {
    const student = value.studentList.find((student) => student.id === id);
    if (student.isPresent === undefined) {
      student.isPresent = true;
      value.setStudentList([...value.studentList]);
    } else if (student.isPresent === true) {
      alert("The student is already in the present list.");
    } else if (student.isPresent === false) {
      alert(
        "The student is in the absent list. Please use the 'Accidentally Added' button."
      );
    }
  };

  const absentHandler = (id) => {
    const student = value.studentList.find((student) => student.id === id);
    if (student.isPresent === undefined) {
      student.isPresent = false;
      value.setStudentList([...value.studentList]);
    } else if (student.isPresent === false) {
      alert("The student is already in the absent list.");
    } else if (student.isPresent === true) {
      alert(
        "The student is in the present list. Please use the 'Accidentally Added' button."
      );
    }
  };
  return (
    <div className="all_student">
      <h3>All Student</h3>
      <div>
        <ul className="student_list">
          {value.studentList.map((person) => (
            <li key={person.id} id={person.id}>
              <span>{person.name} </span>
              <div>
                <button
                  className="edit_btn"
                  onClick={() => editHandler(person.id)}
                >
                  Edit
                </button>
                <button
                  className="delete_btn"
                  onClick={() => deleteHandler(person.id)}
                >
                  Delete
                </button>
                <button
                  className="present_btn"
                  onClick={() => presentHandler(person.id)}
                >
                  Present
                </button>
                <button
                  className="absent_btn"
                  onClick={() => absentHandler(person.id)}
                >
                  Absent
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllStudent;

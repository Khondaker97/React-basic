function Skills({ props }) {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default Skills;

function PersonalInfo({ props }) {
  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <p>Name: {props.name}</p>
      <p>email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}
export default PersonalInfo;

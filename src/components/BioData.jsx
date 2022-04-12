import Interests from "./Interests";
import PersonalInfo from "./Persional-info";
import Skills from "./Skills";

function BioData(props) {
  console.log(props);
  return (
    <div className="bio-data">
      <h2>Bio Data of {props.name}</h2>
      <hr />
      <PersonalInfo props={props} />
      <Skills props={props} />
      <Interests props={props} />
      <hr />
      <p>Referenced By: {props.referencedBy}</p>
    </div>
  );
}

export default BioData;

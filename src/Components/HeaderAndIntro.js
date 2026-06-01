
import '../Style/HeaderAndIntro.css';
import '../App.css';

import picture_of_me from '../assets/images/smiling no background.png';


function HeaderAndIntro(props) {
  return (
    <div className="HeaderDiv">
      <img src={picture_of_me} width="400" height="450" className="introImage" alt="Me smiling"></img>
      <h1 className="glow">&#9823; {props.name} &#9817;</h1>
      <h3 className="intro">{props.message}</h3>
      <hr className="SectionDivider"></hr>
      <br></br>
      <br></br>
    </div>
  );
}

export default HeaderAndIntro;

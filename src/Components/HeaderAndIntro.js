
import '../Style/HeaderAndIntro.css';
import '../App.css';

import picture_of_me from '../assets/images/portfolio_site_pic.jpg';


function HeaderAndIntro(props) {
  return (
    <div className="HeaderDiv">
      <img src={picture_of_me} width="300" height="350" className="introImage" alt="picture of me smiling"></img>
      <h1 className="glow">{props.name}</h1>
      <h3 className="intro">{props.message}</h3>
      <hr className="SectionDivider"></hr>
      <br></br>
      <br></br>
    </div>
  );
}

export default HeaderAndIntro;

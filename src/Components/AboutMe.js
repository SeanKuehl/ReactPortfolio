
import '../Style/AboutMe.css';
import '../App.css';





function AboutMe(props) {

  const linkToMyProgram = "https://www.conestogac.on.ca/fulltime/bachelor-of-computer-science-honours";

  return (
    <div className="AboutMeDiv">
      
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> About Me <b className="SectionBrackets">&gt;</b></h2>
      <p className="AboutMeText">I'm a graduate of the <a href={linkToMyProgram}>Conestoga College Bachelors of Computer Science</a> and
        I have work experience in Web and Mobile development. I'm always looking for new things to explore and I love to tackle real problems with real impact to help everyone achieve their best.
        </p>
      <hr className="SectionDivider"></hr>
    </div>
  );
}

export default AboutMe;

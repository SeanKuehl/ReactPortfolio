
import '../Style/AboutMe.css';
import '../App.css';
//https://www.conestogac.on.ca/fulltime/bachelor-of-computer-science-honours

//<img src={logo} className="App-logo" alt="logo" />

function AboutMe(props) {
  return (
    <div className="AboutMeDiv">
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> About Me <b className="SectionBrackets">&gt;</b></h2>
      <p className="AboutMeText">I'm a graduate of the <a className="Link" href="https://www.conestogac.on.ca/fulltime/bachelor-of-computer-science-honours">Conestoga College Bachelors of Computer Science</a> Where I specialized in the Big Data stream of the program.
        I have experience in Web and Mobile development and I'm always looking for new things to explore. I love to tackle real problems with real impact and help everyone working with me achieve their best.
        In my free time I like to take nature walks and play chess.</p>
      <hr className="SectionDivider"></hr>
    </div>
  );
}

export default AboutMe;


import '../Style/AboutMe.css';
import '../App.css';





function AboutMe(props) {


  return (
    <div className="AboutMeDiv">
      
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> About Me <b className="SectionBrackets">&gt;</b></h2>
      <p className="AboutMeText"> I started out playing tournaments in Ontario and learning from my father, Scott Kuehl who was a master player in his day.
        Since coming out to Calgary for work, I'm now exploring my love for chess even more and would like to share it with you too on my journey to become an IM!
      </p>

      <br></br>

      
      <a href="https://calendar.app.google/tUam4eMrQwjuUJa26">
      <button className='BookingButton'>&#9823; Book your free intro session today! &#9817;</button>
      </a>
      


      <hr className="SectionDivider"></hr>
    </div>
  );
}

export default AboutMe;

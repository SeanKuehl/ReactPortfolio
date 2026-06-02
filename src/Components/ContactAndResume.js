
import '../Style/ContactAndResume.css';
import '../App.css';


function ContactAndResume(props) {

  const myEmail = "mailto:seanliamkuehl@gmail.com";
  

  

  return (
    <div className="ContactDiv">
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Contact <b className="SectionBrackets">&gt;</b></h2>
      
        <p className="ContactInfo">Are you ready to start improving or have a chess question? Give me a call or email today!</p>  
        <br></br>
        <p className="ContactInfo">Email:</p>
        <p className="ContactInfo"><a href={myEmail}>seanliamkuehl@gmail.com</a></p>
        <br></br>
        <br></br>
        <p className="ContactInfo">Phone:</p>
        <p className="ContactInfo">519-722-3874</p>
        
      

      <p className="ContactCopy">&copy; Sean Kuehl 2026</p>
      <hr className="SectionDivider"></hr>
    </div>



  );
}

export default ContactAndResume;

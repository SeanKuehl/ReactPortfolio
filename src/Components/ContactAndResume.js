
import '../Style/ContactAndResume.css';
import '../App.css';


function ContactAndResume(props) {

  const myEmail = "mailto:seanliamkuehl@gmail.com";
  
  const myLinkedIn = "https://www.linkedin.com/in/sean-kuehl-720611219/";
  

  return (
    <div className="ContactDiv">
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Contact <b className="SectionBrackets">&gt;</b></h2>
      
      
        <p className="ContactInfo">Email:</p>
        <p className="ContactInfo"><a href={myEmail}>seanliamkuehl@gmail.com</a></p>
        <p className="ContactInfo">Phone:</p>
        <p>519-722-3874</p>
        <p className="ContactInfo">LinkedIn:</p>
        <p><a href={myLinkedIn}>Sean Kuehl</a></p>
      

      <p className="ContactCopy">&copy; Sean Kuehl 2024</p>
      <hr className="SectionDivider"></hr>
    </div>



  );
}

export default ContactAndResume;

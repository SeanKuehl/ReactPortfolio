
import '../Style/ContactAndResume.css';
import '../App.css';





function ContactAndResume(props) {
  

  return (
    <div className="ContactDiv">
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Contact <b className="SectionBrackets">&gt;</b></h2>
      
      

      <ul className="ContactList">
        <li className="ContactInfo">Email: <a href="mailto:seanliamkuehl@gmail.com">seanliamkuehl@gmail.com</a></li>
        <li className="ContactInfo">Github: <a href="https://github.com/SeanKuehl">SeanKuehl</a></li>
        <li className="ContactInfo">LinkedIn: <a href="https://www.linkedin.com/in/sean-kuehl-720611219/">Sean Kuehl</a></li>
      </ul>

      <p className="ContactCopy">&copy; Sean Kuehl 2024</p>
      <hr className="SectionDivider"></hr>
    </div>



  );
}

export default ContactAndResume;

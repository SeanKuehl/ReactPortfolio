
import '../Style/SoftwareKnowledge.css';
import '../App.css';




function SoftwareKnowledge(props) {
  return (
    <div className="SoftwareKnowledgeDiv">
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Software Knowledge At A Glance <b className="SectionBrackets">&gt;</b></h2>
      
      <div className="OrganizerDiv">
      <div>
        <p className="ListHeader">Languages</p>
        <ul className="LanguagesList">
          <li className="Language">Javascript</li>
          <li className="Language">Python</li>
          <li className="Language">C#</li>
        </ul>
      </div>

      <div>
        <p className="ListHeader">Frameworks/Libraries</p>
        <ul className="FrameworksList">
          <li className="Framework">React/React Native, Vue.js, Express.js</li>
          <li className="Framework">Django, Jupyter Notebooks, Pandas</li>
          <li className="Framework">.Net, EF Core</li>
        </ul>
      </div>

      <div>
        <p className="ListHeader">Skills</p>
        <ul className="SkillsList">
          <li className="Skill">Documentation</li>
          <li className="Skill">Automated Testing</li>
          <li className="Skill">UI Prototyping</li>
        </ul>
      </div>
      </div>

      <hr className="SectionDivider"></hr>
    </div>
  );
}

export default SoftwareKnowledge;

import "./Skill.scss"
function Skill(props) {
    
    return (
    <div className="skill">
        <div className="skill-card">
            <img src={props.skillName} alt=""/>
            <p>{props.ad}</p>
        </div>
    </div>
    );
}

export default Skill;
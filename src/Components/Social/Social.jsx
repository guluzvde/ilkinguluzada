
import "./Social.scss"
import Instagram from "../../logos/instagram.png"
import Twitter from "../../logos/twitter.png"
import Facebook from "../../logos/facebook.png"
import LinkedIn from "../../logos/linkedin.png"

function Social() {
    return (
        <div className="social-group">
        <a href="https://www.instagram.com/guluzvde" target="_blank" rel="noopener noreferrer"><img src={Instagram} /></a>
        <a href="https://www.twitter.com/guluzvde" target="_blank" rel="noopener noreferrer"><img src={Twitter} /></a>
        <a href="https://www.facebook.com/100081601838444" target="_blank" rel="noopener noreferrer"><img src={Facebook} /></a>
        <a href="https://www.linkedin.com/in/guluzvde" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} /></a>
        </div>
        
    );
}

export default Social;
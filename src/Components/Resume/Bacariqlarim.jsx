import './Bacariqlarim.scss'
import Skill from './Skill'
import htmlPNG from '../../logos/html.png'
import cssPNG from '../../logos/css.png'
import bootstrPNG from '../../logos/bootstrap.png'
import sassPNG from '../../logos/sass.png'
import jsPNG from '../../logos/js.png'
import reactPNG from '../../logos/react.png'
import gitPNG from '../../logos/git.png'
import githubPNG from '../../logos/github.png'

function Bacariqlarim() {
  return (
    <div id="bacariqlarim">
      <h1>Bacarıqlarım</h1>
      <div className="bacariqlarim-group">
        <Skill ad="HTML" skillName={htmlPNG} />
        <Skill ad="CSS" skillName={cssPNG} />
        <Skill ad="BootStrap" skillName={bootstrPNG} />
        <Skill ad="Sass" skillName={sassPNG} />
        <Skill ad="JavaScript" skillName={jsPNG} />
        <Skill ad="React.js" skillName={reactPNG} />
        <Skill ad="Git" skillName={gitPNG} />
        <Skill ad="GitHub" skillName={githubPNG} />
      </div>
    </div>
  )
}

export default Bacariqlarim

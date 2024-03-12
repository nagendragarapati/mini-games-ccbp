import './index.css'

const NavBar = props => {
  const {score, TopScore, falseClicked} = props

  return (
    <div className="main-nav">
      <div className="emoji-logo-container">
        <img
          src="/Images/header-img-emoji.png"
          alt="emoji logo"
          className="emoji_logo"
        />
        <p className="text-emoji-heading">Emoji Game</p>
      </div>

      {!falseClicked && (
        <div className="scores-container">
          <p className="text-emoji scorevalue">
            Score: <span className="score-emoji">{score}</span>
          </p>
          <p className="text-emoji">
            Top Score: <span className="score-emoji">{TopScore}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default NavBar

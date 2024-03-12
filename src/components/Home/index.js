import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="main-container-header">
    <h1>Games</h1>
    <ul className="cards-container">
      <Link to="/emoji-game" className="nav-link">
        <li className="game-container">
          <img
            src="/Images/Group 7471emoji.png"
            className="emoji-logo"
            alt="emoji game"
          />
        </li>
      </Link>

      <Link to="/memory-matrix" className="nav-link">
        <li className="game-container">
          <p className="text">Memory Matrix</p>
          <img
            src="/Images/memory.png"
            className="matrix-logo"
            alt="memory matrix"
          />
        </li>
      </Link>

      <Link to="/rock-paper-scissor" className="nav-link">
        <li className="game-container">
          <p className="text">Rock Paper Scissor</p>
          <img
            src="/Images/Group 7469RPSlogo.png"
            className="rps-logo"
            alt="rock paper scissor"
          />
        </li>
      </Link>

      <Link to="/card-flip-memory-game" className="nav-link">
        <li className="game-container">
          <img
            src="/Images/animalscard-flop-logo.png"
            className="animalscard-logo"
            alt="card flip memory game"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default Home

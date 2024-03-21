import {useHistory, Link} from 'react-router-dom'
import {flipRulesSet1, flipRulesSet2} from '../../GlobalRules'
import GlobalRulesComp from '../../GlobalRulesDisplayComp'

import './index.css'

const FlipRulesAndPlay = () => {
  const history = useHistory()

  return (
    <div className="flip-main ">
      <div className="rps-middle">
        <div className="back-btn-container">
          <img
            src="/Images/arrow-leftarrowback.png"
            alt="arrow-leftarrowback"
            className="back-arrow"
          />
          <p className="back-text" onClick={() => history.push('/')}>
            Back
          </p>
        </div>

        <div className="logo-container">
          <img
            src="/Images/animalscard-flop-logo.png"
            alt="flip-logo"
            className="flip-logo"
          />
        </div>
        <p className="rules-text">Rules</p>

        <GlobalRulesComp rulesset1={flipRulesSet1} rulesset2={flipRulesSet2} />

        <div className="start-playing-container">
          <Link to="/flip-play-game">
            <button type="button" className="start">
              Start playing
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FlipRulesAndPlay

import {useHistory} from 'react-router-dom'
import GlobalRulesComp from '../../GlobalRulesDisplayComp'
import {emojiRulesSet} from '../../GlobalRules'

import './index.css'

const EmojiRules = () => {
  const history = useHistory()

  return (
    <div className="emoji-rules-main">
      <div className="back-btn-container">
        <img
          src="/Images/black-back-arrow.png"
          alt="arrow-leftarrowback"
          className="black-back-arrow"
        />
        <p className="back-text" onClick={() => history.push('/')}>
          Back
        </p>
      </div>

      <div className="middle-main">
        <div className="icon-sec">
          <img
            src="/Images/Group 7471emoji.png"
            alt="icon-emoji"
            className="emoji-rules-icon"
          />
        </div>

        <div className="rules-container">
          <p className="emoji-rules-text">Rules</p>

          <GlobalRulesComp rulesset1={emojiRulesSet} />

          <div className="start-btn-container">
            <button
              type="button"
              className="emoji-start-play"
              onClick={() => history.push('/emoji-game-home')}
            >
              Start Playing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiRules

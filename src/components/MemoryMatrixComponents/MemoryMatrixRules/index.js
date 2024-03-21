import {useHistory, Link} from 'react-router-dom'
import {memoryRuleSet1, memoryRuleSet2} from '../../GlobalRules'
import GlobalRulesComp from '../../GlobalRulesDisplayComp'

import './index.css'

const MemoryMatrixRules = () => {
  const history = useHistory()

  return (
    <div className="rps-main memory-matrix-main">
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
            src="/Images/memory.png"
            alt="rps-logo"
            className="memory-matrix-logo"
          />
        </div>
        <p className="rules-text">Rules</p>

        <GlobalRulesComp
          rulesset1={memoryRuleSet1}
          rulesset2={memoryRuleSet2}
        />

        <div className="start-playing-container">
          <Link to="/memory-game">
            <button type="button" className="start start-memory-game">
              Start playing
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MemoryMatrixRules

import {useSelector, useDispatch} from 'react-redux'
import './index.css'
import {useHistory} from 'react-router-dom'
import {flipActions} from '../../../store/flipSlice'

const FlipResults = () => {
  const gameStatus = useSelector(state => state.flipgame.gameStatus)
  const noOfFlips = useSelector(state => state.flipgame.noOfFlips)
  const history = useHistory()
  const dispatch = useDispatch()

  let imageUrl
  let resultText
  let statusText

  switch (gameStatus) {
    case 'Success':
      imageUrl = '/Images/flip-success.png'
      resultText = 'Congratulations!'
      statusText = 'You have reached the score in time.'
      break
    case 'Fail':
      imageUrl = '/Images/flip-fail.png'
      resultText = 'Better luck next time!'
      statusText = 'You have not reached the score in time .'
      break
    default:
      imageUrl = ''
      resultText = ''
      statusText = ''
  }

  const onFlipPlayAgain = () => {
    dispatch(flipActions.setNoOfFlips(0))
    history.push('/flip-play-game')
  }

  return (
    <div className="flip-result-main">
      <img src={imageUrl} alt="flip-result-img" className="flip-result-img" />

      <h1 className="flip-result-text">{resultText}</h1>

      <p className="no-of-flips">No Of Flips {noOfFlips}</p>

      <h1 className="result-status">{statusText}</h1>

      <button
        type="button"
        className="play-again-flip"
        onClick={onFlipPlayAgain}
      >
        Play Again
      </button>
    </div>
  )
}

export default FlipResults

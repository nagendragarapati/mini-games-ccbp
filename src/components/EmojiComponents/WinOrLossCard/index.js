import './index.css'

const EmojiWinRLose = props => {
  const {score, onPlayAgain} = props

  const onPlayAgaininEmoji = () => {
    onPlayAgain()
  }

  let resultImg
  let resultText

  if (score === 12) {
    resultImg = '/Images/Imagewon-icon.png'
    resultText = 'You Win'
  } else {
    resultImg = '/Images/Imageloss-icon.png'
    resultText = 'You Loss'
  }

  const elapsedScore = score < 10 ? `0${score}` : score

  return (
    <div className="emoji-result-main">
      <div className="emoji-result-middle">
        <div className="result-texts-container">
          <h1 className="emoji-loss-text">{resultText}</h1>
          <p className="emoji-score-result-text">Best Score</p>
          <p className="emoji-score-result">{elapsedScore}/12</p>
          <button onClick={onPlayAgaininEmoji} className="emoji-play-again">
            Play Again
          </button>
        </div>

        <div className="emoji-result-img-sec">
          <img
            src={resultImg}
            className="emoji-result-img"
            alt="emoji-result-img"
          />
        </div>
      </div>
    </div>
  )
}

export default EmojiWinRLose

import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {rpsActions} from '../../../store/rpsslice'
import './index.css'

const gameValues = ['ROCK', 'PAPER', 'SCISSOR']

const ResultScreen = () => {
  const userChoice = useSelector(state => state.rps.userChoice)
  const scoreValue = useSelector(state => state.rps.score)
  const dispatch = useDispatch()

  const [status, setStatus] = useState('')
  const [oppoChoice, setOppoChoice] = useState('')
  const history = useHistory()

  const getChoiceImg = choice => {
    let ChoiceImg = ''

    switch (choice) {
      case 'ROCK':
        ChoiceImg = '/Images/Group 6941rock.png'
        break
      case 'PAPER':
        ChoiceImg = '/Images/Paperpaper.png'
        break
      case 'SCISSOR':
        ChoiceImg = '/Images/Group 6940sicor.png'
        break
      default:
        ChoiceImg = ''
    }
    return ChoiceImg
  }

  const getStatusEmoji = statusVal => {
    let statusImgs = []

    switch (statusVal) {
      case 'YOU WON':
        statusImgs.push('/Images/Emojiwon-emoji.png', '/Images/Group 7618.png')
        break
      case 'YOU LOSE':
        statusImgs.push(
          '/Images/Emojiloss-sm-emoji.png',
          '/Images/Group 7618draw-big-emoji.png',
        )
        break
      case 'IT IS DRAW':
        statusImgs.push(
          '/Images/Emojidrwa-sm-emoji.png',
          '/Images/Group 7618loss-bg-emoji.png',
        )
        break
      default:
        statusImgs = []
    }
    return statusImgs
  }

  const generateOpponentChoice = () => {
    const randomValue = Math.floor(Math.random() * 3)
    setOppoChoice(gameValues[randomValue])
  }

  useEffect(() => {
    if (userChoice) {
      generateOpponentChoice()
    }
  }, [userChoice])

  const getStatusAndScore = () => {
    let gameStatus = ''
    if (userChoice === oppoChoice) {
      gameStatus = 'IT IS DRAW'
    } else if (
      (userChoice === gameValues[1] && oppoChoice === gameValues[0]) ||
      (userChoice === gameValues[2] && oppoChoice === gameValues[1]) ||
      (userChoice === gameValues[0] && oppoChoice === gameValues[2])
    ) {
      gameStatus = 'YOU WON'
      dispatch(rpsActions.setScore(scoreValue + 1))
    } else {
      gameStatus = 'YOU LOSE'
      dispatch(rpsActions.setScore(scoreValue - 1))
    }

    setStatus(gameStatus)
  }

  useEffect(() => {
    if (oppoChoice) {
      getStatusAndScore()
    }
  }, [oppoChoice])

  return (
    <div className="result-main">
      <h1 className="heading">ROCK PAPER SCISSOR</h1>

      <div className="box-main">
        <div className="box-container">
          <ul className="title-container">
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissor</li>
          </ul>

          <div className="score-container">
            <img
              src={getStatusEmoji(status)[1]}
              alt="result-img"
              className="result-img"
            />
            <div className="score">
              <p className="score-text">Score</p>
              <p className="score-num">{scoreValue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="third-sec-main">
        <div className="result-container">
          <div className="result">
            <p className="text">You</p>
            <img
              src={getChoiceImg(userChoice)}
              className="img-result"
              alt="rock-img"
            />
          </div>

          <div className="emoji-container">
            <img
              src={getStatusEmoji(status)[0]}
              className="img-emoji"
              alt="emoji-img"
            />
            <p className="result-text">{status}</p>
            <button
              type="button"
              className="play-again-btn"
              onClick={() => history.push('/rps-play-game')}
            >
              Play Again
            </button>
          </div>

          <div className="result">
            <p className="text">Opponent</p>
            <img
              src={getChoiceImg(oppoChoice)}
              className="img-result"
              alt="sicc-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultScreen

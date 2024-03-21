import {useHistory} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import {useDispatch, useSelector} from 'react-redux'
import {flipRulesSet1, flipRulesSet2} from '../../GlobalRules'
import RulesModal from '../../GlobalRulesModal'
import {flipActions} from '../../../store/flipSlice'

import './index.css'

const imgsArray = [
  {
    id: 1,
    url: '/Images/Group 7477bull.png',
    isFlipped: false,
    pet: 'BULL',
  },
  {
    id: 2,
    url: '/Images/Group 7475lazy.png',
    isFlipped: false,
    pet: 'LAZY',
  },
  {
    id: 3,
    url: '/Images/Group 7476bear.png',
    isFlipped: false,
    pet: 'BEAR',
  },
  {
    id: 4,
    url: '/Images/Group 7478mouse.png',
    isFlipped: false,
    pet: 'MOUSE',
  },
  {
    id: 5,
    url: '/Images/Group 7479crow.png',
    isFlipped: false,
    pet: 'CROW',
  },
  {
    id: 6,
    url: '/Images/Group 7480hen.png',
    isFlipped: false,
    pet: 'HEN',
  },
  {
    id: 7,
    url: '/Images/Group 7481crane.png',
    isFlipped: false,
    pet: 'CRANE',
  },
  {
    id: 8,
    url: '/Images/Group 7482goat.png',
    isFlipped: false,
    pet: 'GOAT',
  },
  {
    id: 9,
    url: '/Images/Group 7483duck.png',
    isFlipped: false,
    pet: 'DUCK',
  },
  {
    id: 10,
    url: '/Images/Group 7484hippo.png',
    isFlipped: false,
    pet: 'HIPPO',
  },
  {
    id: 11,
    url: '/Images/Group 7477bull.png',
    isFlipped: false,
    pet: 'BULL',
  },
  {
    id: 12,
    url: '/Images/Group 7475lazy.png',
    isFlipped: false,
    pet: 'LAZY',
  },
  {
    id: 13,
    url: '/Images/Group 7476bear.png',
    isFlipped: false,
    pet: 'BEAR',
  },
  {
    id: 14,
    url: '/Images/Group 7478mouse.png',
    isFlipped: false,
    pet: 'MOUSE',
  },
  {
    id: 15,
    url: '/Images/Group 7479crow.png',
    isFlipped: false,
    pet: 'CROW',
  },
  {
    id: 16,
    url: '/Images/Group 7480hen.png',
    isFlipped: false,
    pet: 'HEN',
  },
  {
    id: 17,
    url: '/Images/Group 7481crane.png',
    isFlipped: false,
    pet: 'CRANE',
  },
  {
    id: 18,
    url: '/Images/Group 7482goat.png',
    isFlipped: false,
    pet: 'GOAT',
  },
  {
    id: 19,
    url: '/Images/Group 7483duck.png',
    isFlipped: false,
    pet: 'DUCK',
  },
  {
    id: 20,
    url: '/Images/Group 7484hippo.png',
    isFlipped: false,
    pet: 'HIPPO',
  },
]
const FlipPlay = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const noOfFlips = useSelector(state => state.flipgame.noOfFlips)
  const [modalShow, setModalShow] = useState(false)
  const [shuffledArray, setShuffledArray] = useState([])
  const [compareArray, setCompareArray] = useState([])
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(120)

  const interval = React.useRef()

  const minutes = Math.floor(seconds / 60)
  const remainingsSeconds = seconds % 60

  const getElapsedTimerAndScore = value => (value < 9 ? `0${value}` : value)

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds(pre => pre - 1)
    }, 1000)
  }, [])

  const getShuffledArray = () => {
    const dulicateArr = imgsArray
    for (let i = dulicateArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[dulicateArr[i], dulicateArr[j]] = [dulicateArr[j], dulicateArr[i]]
    }

    setShuffledArray(dulicateArr)
  }

  useEffect(() => {
    getShuffledArray()
  }, [])

  if (seconds === 0 && score !== imgsArray.length / 2) {
    dispatch(flipActions.setGameStatus('Fail'))
    history.push('/flip-result')
    clearInterval(interval.current)
  } else if (seconds > 0 && score === imgsArray.length / 2) {
    dispatch(flipActions.setGameStatus('Success'))
    history.push('/flip-result')
    clearInterval(interval.current)
  }

  const flipAgain = () => {
    if (compareArray[0].pet !== compareArray[1].pet) {
      const newFlippedArray = shuffledArray.map(item => {
        const item2 = compareArray.find(card => card.id === item.id)
        return item2 ? {...item, isFlipped: false} : item
      })

      setShuffledArray(newFlippedArray)
    } else {
      setScore(scoreval => scoreval + 1)
    }

    setCompareArray([])
  }

  useEffect(() => {
    if (compareArray.length === 2) {
      dispatch(flipActions.setNoOfFlips(noOfFlips + 1))
      const flipAgainTime = setTimeout(() => flipAgain(), 2000)
      return () => clearTimeout(flipAgainTime)
    }
    return undefined
  }, [compareArray])

  const onImgageClick = card => {
    if (!card.isFlipped && compareArray.length < 2) {
      const newArray = shuffledArray.map(obj =>
        obj.id === card.id ? {...obj, isFlipped: true} : obj,
      )
      setShuffledArray(newArray)
      setCompareArray(prev => [...prev, card])
    }
  }

  return (
    <div className="flip-play-main">
      <div className="flip-middle-container">
        <div className="back-rule-header back-rule-header-flip">
          <div className="back-container">
            <img
              src="/Images/arrow-leftarrowback.png"
              alt="arrow-leftarrowback"
              className="back-arrow"
            />
            <p
              className="back-text"
              onClick={() => history.push('/card-flip-memory-game')}
            >
              Back
            </p>
          </div>

          <button
            type="button"
            className="rules-btn"
            onClick={() => setModalShow(true)}
          >
            Rules
          </button>

          <RulesModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            rulesset1={flipRulesSet1}
            rulesset2={flipRulesSet2}
          />
        </div>

        <div className="flip-title-container">
          <h1 className="flip-main-heading">Card-Flip Memory Game</h1>

          <div className="score-timer-container">
            <p className="flip-count game-result-values">
              Card flip count - {getElapsedTimerAndScore(noOfFlips)}
            </p>
            <p className="time-flip game-result-values">
              {getElapsedTimerAndScore(minutes)}:
              {getElapsedTimerAndScore(remainingsSeconds)}
            </p>
            <p className="score-sec game-result-values">
              Score - {getElapsedTimerAndScore(score)}
            </p>
          </div>
        </div>

        <ul className="flip-cards-container">
          {shuffledArray?.map(card => (
            <ReactCardFlip
              isFlipped={card.isFlipped}
              flipDirection="vertical"
              id={card.id}
              className="flip-image-container"
            >
              <img
                src="/Images/foot-print 1foot-icon.png"
                alt="flip-img"
                className="flip-image flip-foot"
                onClick={() => onImgageClick(card)}
              />

              <img
                src={card.url}
                alt="flip-img"
                className="flip-image"
                onClick={() => onImgageClick(card)}
              />
            </ReactCardFlip>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FlipPlay

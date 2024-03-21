import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {memoryMatrixActions} from '../../../store/memorySlice'
import {memoryRuleSet1, memoryRuleSet2} from '../../GlobalRules'
import RulesModal from '../../GlobalRulesModal'

import './index.css'

const MemoryGame = () => {
  const [timeRunning, setTimeRunning] = useState(true)
  const [boxarray, setBoxArray] = useState([])
  const [randomNums, setRandomNums] = useState([])
  const [clickedSuccessBoxes, setClickedBoxes] = useState([])
  const [clickedWrongBoxes, setClickedWrongBoxes] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const gameLevel = useSelector(state => state.memorymatrix.gameLevel)

  const N = gameLevel + 2

  const noOfBoxes = N * N

  const boxesArray = []
  const randomNumArray = []
  let boxWidth

  const getBoxesArray = () => {
    for (let i = 0; i < noOfBoxes; i += 1) {
      boxesArray.push({id: i + 1, isActive: false, wrongClicked: false})
      const randomNum = Math.floor(Math.random() * noOfBoxes)
      if (!randomNumArray.includes(randomNum) && randomNum !== 0) {
        randomNumArray.push(randomNum)
      }
    }

    setBoxArray(boxesArray)
    setRandomNums(randomNumArray)
  }

  console.log('boxesArray', boxarray)

  useEffect(() => {
    getBoxesArray()
  }, [gameLevel])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRunning(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [gameLevel, boxarray])

  const splicedRandomNums = randomNums?.slice(0, N)
  const reArrangedBoxes = boxarray?.map(box => {
    const activeBox = splicedRandomNums.find(num => num === box.id)
    return activeBox ? {...box, isActive: true} : box
  })

  switch (gameLevel) {
    case 1:
      boxWidth = '100px'
      break
    case 2:
      boxWidth = '70px'
      break
    case 3:
      boxWidth = '60px'
      break
    case 4:
      boxWidth = '50px'
      break
    case 5:
      boxWidth = '40px'
      break
    case 6:
      boxWidth = '35px'
      break
    case 7:
      boxWidth = '25px'
      break
    case 8:
      boxWidth = '35px'
      break
    case 9:
      boxWidth = '30px'
      break
    case 10:
      boxWidth = '27px'
      break
    default:
      boxWidth = ''
  }

  useEffect(() => {
    if (clickedSuccessBoxes?.length > 0 && splicedRandomNums?.length > 0) {
      if (clickedSuccessBoxes?.length === splicedRandomNums?.length) {
        const timerSuccess = setTimeout(() => {
          dispatch(memoryMatrixActions.setGameLevel(gameLevel + 1))
          setTimeRunning(true)
          setClickedBoxes([])
        }, 1000)
        return () => {
          clearTimeout(timerSuccess)
        }
      }
    }

    return undefined
  }, [clickedSuccessBoxes])

  const onClickBox = boxId => {
    const numIncludes = splicedRandomNums.includes(boxId)
    let newBoxesArray = []

    if (clickedWrongBoxes.length === 0) {
      if (numIncludes) {
        newBoxesArray = boxarray.map(obj =>
          obj.id === boxId ? {...obj, isActive: true} : obj,
        )
        setClickedBoxes([...clickedSuccessBoxes, boxId])
      } else {
        newBoxesArray = boxarray.map(obj =>
          obj.id === boxId ? {...obj, wrongClicked: true} : obj,
        )
        setClickedWrongBoxes([...clickedWrongBoxes, boxId])
        setTimeout(() => {
          setClickedBoxes([])
          setClickedWrongBoxes([])
          history.push('/memory-game-results')
        }, 1000)
      }
      setBoxArray(newBoxesArray)
    }
  }

  const getBoxClassName = box => {
    let boxClassName = ''
    if (box.isActive) {
      boxClassName = 'box active-box'
    } else if (box.wrongClicked) {
      boxClassName = 'box wrong-box'
    } else {
      boxClassName = 'box'
    }

    return boxClassName
  }

  return (
    <div className="matrix-main">
      <div className="back-rule-header">
        <div className="back-container">
          <img
            src="/Images/arrow-leftarrowback.png"
            alt="arrow-leftarrowback"
            className="back-arrow"
          />
          <p
            className="back-text"
            onClick={() => history.push('/memory-matrix')}
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
          rulesset1={memoryRuleSet1}
          rulesset2={memoryRuleSet2}
        />
      </div>

      <div className="matrix-middle">
        <h1 className="matix-heading">Memory Matrix</h1>
        <p className="game-level">Level - {gameLevel}</p>
        <div className="boxes-main-container">
          <div className="boxes-middle-container">
            {timeRunning ? (
              <ul className="boxes-inner-container">
                {reArrangedBoxes?.map(each => (
                  <li
                    className={each.isActive ? 'box active-box' : 'box'}
                    style={{width: boxWidth, height: boxWidth}}
                    id={`box${each.id}`}
                  />
                ))}
              </ul>
            ) : (
              <ul className="boxes-inner-container">
                {boxarray?.map(each => (
                  <li
                    className={getBoxClassName(each)}
                    style={{width: boxWidth, height: boxWidth}}
                    id={`box${each.id}`}
                    onClick={() => onClickBox(each.id)}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryGame

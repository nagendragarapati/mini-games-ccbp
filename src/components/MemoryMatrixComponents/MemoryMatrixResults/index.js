import {Line} from 'rc-progress'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {memoryMatrixActions} from '../../../store/memorySlice'

import './index.css'

const memoryResultIcons = [
  {
    id: 1,
    url: '/Images/Pokerfacelevel-1.png',
  },
  {
    id: 2,
    url: '/Images/Grimmacelevel-2.png',
  },
  {
    id: 3,
    url: '/Images/Smilelevel-3.png',
  },
  {
    id: 4,
    url: '/Images/Optimisticlevel-4.png',
  },
  {
    id: 5,
    url: '/Images/Grinlevel-5.png',
  },
  {
    id: 6,
    url: '/Images/Laughlevel-6.png',
  },
  {
    id: 7,
    url: '/Images/level-7.png',
  },
  {
    id: 8,
    url: '/Images/Like a bosslevel-8.png',
  },
]

const gameLevels = ['Level 1', 'Level 3', 'Level 6', 'Level 10']

const MemoryMatrixResults = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const gameLevel = useSelector(state => state.memorymatrix.gameLevel)

  const completedGameLevel = gameLevel > 1 && gameLevel - 1

  const staustext = completedGameLevel < 1 ? 'Hoo Nooo !' : 'Congratulations!'
  const levelStatustext =
    completedGameLevel < 1
      ? 'You have not started game yet !!'
      : `You have reached level ${completedGameLevel}`

  const onPlayMemoryAgain = () => {
    dispatch(memoryMatrixActions.setGameLevel(1))
    history.push('/memory-game')
  }

  return (
    <div className="memory-result-main">
      <div className="memory-result-middle">
        <div className="memory-result-icons">
          {memoryResultIcons.map(icon => (
            <img
              src={icon.url}
              alt="result-icon"
              className="memory-status-icon"
            />
          ))}
        </div>

        <div className="line-progress-container">
          <Line
            percent={completedGameLevel * 10}
            strokeWidth={1}
            trailWidth={1}
            strokeColor="rgba(70, 122, 255, 1)"
          />
        </div>

        <div className="game-levels-container">
          {gameLevels.map(level => (
            <p className="level-text">{level}</p>
          ))}
        </div>

        <div className="status-text-container">
          <h1 className="congrats-text">{staustext}</h1>
          <h2 className="reached-text">{levelStatustext}</h2>

          <button
            type="button"
            className="memory-play-again"
            onClick={onPlayMemoryAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemoryMatrixResults

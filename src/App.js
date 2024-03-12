import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import RpsRulesAndPlay from './components/RPSComponents/RpsRulesAndPlay'
import RpsPlay from './components/RPSComponents/RPSPlay'
import ResultScreen from './components/RPSComponents/Results'
import EmojiHome from './components/EmojiComponents/EmojiHome'
import FlipRulesAndPlay from './components/CardFlipComponents/FlipRulesPlay'
import FlipPlay from './components/CardFlipComponents/FlipPlay'
import EmojiRules from './components/EmojiComponents/EmojiRules'
import FlipResults from './components/CardFlipComponents/FlipResults'
import MemoryGame from './components/MemoryMatrixComponents/MemoryGame'
import MemoryMatrixRules from './components/MemoryMatrixComponents/MemoryMatrixRules'
import MemoryMatrixResults from './components/MemoryMatrixComponents/MemoryMatrixResults'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rock-paper-scissor" element={<RpsRulesAndPlay />} />
        <Route path="/rps-play-game" element={<RpsPlay />} />
        <Route path="/rps-result" element={<ResultScreen />} />
        <Route path="/card-flip-memory-game" element={<FlipRulesAndPlay />} />
        <Route path="/flip-result" element={<FlipResults />} />
        <Route path="/flip-play-game" element={<FlipPlay />} />
        <Route path="/emoji-game-home" element={<EmojiHome />} />
        <Route path="/emoji-game" element={<EmojiRules />} />
        <Route path="/memory-matrix" element={<MemoryMatrixRules />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/memory-game-results" element={<MemoryMatrixResults />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App

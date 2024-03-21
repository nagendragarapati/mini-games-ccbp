import {Route, Switch, BrowserRouter} from 'react-router-dom'
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rock-paper-scissor" component={RpsRulesAndPlay} />
        <Route exact path="/rps-play-game" component={RpsPlay} />
        <Route exact path="/rps-result" component={ResultScreen} />
        <Route
          exact
          path="/card-flip-memory-game"
          component={FlipRulesAndPlay}
        />
        <Route exact path="/flip-result" component={FlipResults} />
        <Route exact path="/flip-play-game" component={FlipPlay} />
        <Route exact path="/emoji-game-home" component={EmojiHome} />
        <Route exact path="/emoji-game" component={EmojiRules} />
        <Route exact path="/memory-matrix" component={MemoryMatrixRules} />
        <Route exact path="/memory-game" component={MemoryGame} />
        <Route
          exact
          path="/memory-game-results"
          component={MemoryMatrixResults}
        />

        <Route component={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App

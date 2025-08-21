import { BrowserRouter, Route, Routes } from "react-router"
import Accueil from "./pages/Accueil"
import GamePlay from "./pages/GamePlay"
import GameOver from "./pages/GameOver"


function App() {
  
  return (
    <div className="ecran-portable">
      <div className="titre">
        <h1>Cutie Panda</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/game-play" element={<GamePlay/>}/>
          <Route path="/game-over" element={<GameOver/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

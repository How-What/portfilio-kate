import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import ComissionsPage from './pages/comissions/Commisions'
import PassengerPrincessLifePage from './pages/passenger_princess_life/PassenPrincessLife'
import FanartPage from './pages/fanart/Fanart'
import PetPortraitPage from './pages/pet_portraits/PetPortaits'
import Home from './pages/home/Home'


function App() {

    return (
        <BrowserRouter>
        <div>
            <Home></Home>
        </div>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/petportraits" element={<PetPortraitPage/>}/>
            <Route path="/fanart" element={<FanartPage/>}/>
            <Route path="/passengerprincesslife" element={<PassengerPrincessLifePage/>}/>
            <Route path="/comissions" element={<ComissionsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App
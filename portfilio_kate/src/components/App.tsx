import './App.css'
import {useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HeaderHome from './header/HeaderHome'
import StampButton from './buttons/StampButton'
import StampType from '../enum/Stamps'


function App() {

    return (
        <BrowserRouter>
        <div>
            <HeaderHome/>
            <div className="container mx-auto">
                <div className="btn-layout">
                    <Link to='/petportraits'><StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/></Link>
                    
                    <StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/>
                    <StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/>
                    <StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/>
                </div>
            </div>
        </div>
        
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/petportraits" element={<></>}/>
            <Route path="/fanart" element={<></>}/>
            <Route path="/passengerprincesslife" element={<></>}/>
            <Route path="/comissions" element={<></>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App
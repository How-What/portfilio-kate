import './App.css'
import {useState} from 'react'
import HeaderHome from './header/HeaderHome'
import StampButton from './buttons/StampButton'


function App() {

    return (
        <>
        <div>
            <HeaderHome/>
            <div className="container mx-auto">
                <div className="btn-layout">
                    <StampButton label="illustrations" onClick={() => {}}/>
                    <StampButton label="fanart" onClick={() => {}}/>
                    <StampButton label="pplife" onClick={() => {}}/>
                    <StampButton label="comissions" onClick={() => {}}/>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default App
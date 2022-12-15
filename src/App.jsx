import { useState } from 'react'
import colors from './Data/colors.json'
import Card from './Cards/Card'
import './App.css'

function App() {
    const [Bg, setBg] = useState(Math.floor(Math.random() * colors.length));

    return (
        <>
            <Card />
        </>
    )
}

export default App

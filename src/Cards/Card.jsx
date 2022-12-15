import { useState } from 'react';
import quotes from '../Data/quotes.json'
import colors from '../Data/colors.json'
import './Card.css'

const Card = () => {
    const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length))
    const [cardBg, setCardBg] = useState(Math.floor(Math.random() * colors.length));
    const [bodyBgIndex, setbodyBgIndex] = useState(Math.floor(Math.random() * colors.length));
    const [btnIndex, setBtnIndex] = useState(Math.floor(Math.random() * colors.length))

    const nextQuote = () =>{
        setQuoteIndex(Math.floor(Math.random() * quotes.length))
        setCardBg(Math.floor(Math.random() * colors.length))
        setbodyBgIndex(Math.floor(Math.random() * colors.length))
    }

    return (
        <div className='App' style={{backgroundColor: colors[bodyBgIndex].hex}}>
            <h1>Entregable 1 - Mesach Venegas</h1>
            <div className="card" style={{ backgroundColor: colors[cardBg].hex }}>
                <h2 className='card__title'>{quotes[quoteIndex].author}</h2>
                <p className='card__quote'>{`"${quotes[quoteIndex].quote}"`}</p>
            </div>
            <button className='btn' onClick={nextQuote}>Change</button>
        </div>
    );
};

export default Card;
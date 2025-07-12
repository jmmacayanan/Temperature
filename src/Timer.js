import React, { useState, useEffect } from 'react'
import './Timer.css'

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);
        return () => clearInterval(interval);
    }
);

    return(
    <div className='TimerApp'>
        <header className='App-header'>
            <p className='timerText'>Timer: {count} seconds</p>
        </header>
    </div>
    );
}

export default App;
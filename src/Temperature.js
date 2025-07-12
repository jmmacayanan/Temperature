import { useState, useEffect } from 'react';

function TemperatureInput({ label, value, onChange }) {
    return(
        <div>
            <label>
                <input type='number' value={value} onChange={(e) => onChange(e.target.value)} style={{marginLeft: '10px'}}/>
            </label>
        </div>
    )
}

function Temperature(){
    const [temperature, setTemperature] = useState(0)
    const fahrenheit = temperature
        ? ((parseFloat(temperature) * 9) / 5 + 32).toFixed(1)
        :'';

    return(
        <div className='App' style={{textAlign:'center', marginTop: '50px'}}>
            <h2>Temperature Converter</h2>
            <TemperatureInput label='Celsius' value={temperature} onChange={setTemperature}/>
            <p>fahrenheit: {fahrenheit}</p>
        </div>
    )
}

export default Temperature;
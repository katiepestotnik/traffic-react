import React, {useState} from 'react';
import Bulb from './components/Bulb';
export default function App() {
  const [colorObj, setColorObj] = useState({})
  const handleClick = (e) => {
    if (e.target.id === 'stop') setColorObj({
      red: 'red',
    })
    else if (e.target.id === 'slow') setColorObj({
      yellow: 'yellow',
    })
    else setColorObj({
      green: 'green'
    })
  }
  return (
    <div className="App">
      <section>
        <div id="control-panel">
          <h2 onClick={handleClick} id="stop" className="button">
            Stop
          </h2>
          <h2 onClick={handleClick} id="slow" className="button">
            Slow
          </h2>
          <h2 onClick={handleClick} id="go" className="button">
            Go
          </h2>
        </div>
        <div id="traffic-lights">
          <Bulb color={colorObj.red} />
          <Bulb color={colorObj.yellow} />
          <Bulb color={colorObj.green} />
        </div>
      </section>
    </div>
  );
}

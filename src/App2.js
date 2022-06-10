
import './App.css';
import { useState } from 'react';

function App2() {
  
  const [inON , setIsOn] = useState(false);

  const showLang= () => {
    setIsOn(isOn => !isOn)  // h1을 클릭하면 보였다안보였다함.
  }

    return (
        <div className="App">
            <ul className='lang-tab' onClick={showLang}>
                <li>earth</li>
                <li>KR</li>
            </ul>
            <ul className={inON ? 'lang-box on' : 'lang-box off'}>
                <li>EN</li> 
                <li>JP</li> 
                <li>KR</li> 
                <li>TW</li> 
                <li>TH</li> 
                <li>ID</li> 
            </ul>
        </div>
    );
};

export default App2;

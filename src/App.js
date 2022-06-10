
import './App.css';
import FunList from './FunList';
import Test from './Test/Test';
import { useState } from 'react';


function App() {
  const [num,setNum] = useState(0); //변수는 undefined 상태면 안되기 때문에 초기값을 줌 -> useState(0)
  const [name,setName] = useState('미니');
  const [inON , setIsOn] = useState(false);
  
  const plus = ()=>{
    setNum(num => num+1) //버튼 누르면 1씩 증가
  }
  const minus = ()=>{
    setNum(num => num-1) //버튼 누르면 1씩 감소
  }
  const changeName = ()=>{
    setName(name === '미니' ? '미키' : '미니') // 클릭했을 때 미니와 미키가 번갈아가면서 나옴
  }

  const showFun= () => {
    setIsOn(isOn => !isOn)  // h1을 클릭하면 보였다안보였다함.
  }
  return (
    <div className="App">
        <h1 className='fun-logo' onClick={showFun}>Fun</h1>
        <div className={inON ? 'fun-box on' : 'fun-box off'}>
          <FunList />
        </div>
        <Test />
        <div className='count-box'>
          <h2>{num}</h2>
          <button onClick={plus}>1씩 증가</button>
          <button onClick={minus}>1씩 감소</button>
        </div>
        <div>
          <h2>{name}</h2>
          <button onClick={changeName}>불러봐</button>
        </div>
    </div>

  );
}

export default App;

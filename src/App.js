import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';
import {useState} from 'react';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
    const toggleGamePlay=()=>{
      setIsGameStarted((prev)=>!prev);
    };
  return (
    
    <div className="App">
    {
      isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>

    }
     
    </div>
  );
}

export default App;

// const Button=styled.button`
// background-color:black;
// color:#fff;
// padding: 10px;
// `
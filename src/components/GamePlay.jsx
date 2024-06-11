import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from  './RoleDice'
import Rules from  './Rules'
import {useState} from 'react'
const GamePlay = () => {
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [score,setScore]=useState(0);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);
  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  };
  const roleDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice(()=>randomNumber);
    {
      
      if(selectedNumber===currentDice){
          setScore(prev=>prev+randomNumber);
      }
      else{
        setScore(prev=>prev-2);
      }
    }
    setSelectedNumber(undefined);
  }
  const resetScore=()=>{
      setScore(0);
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice}
        roleDice={roleDice} 
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{
          showRules?"Hide":"Show"
        } Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.main`
  padding-top:5px;
  
    .top_section{
      display:flex;
      justify-content:space-around;
      align-items:bottom;
    }
    .btns{
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items:center; 
      gap:10px;
    }
`
const Button=styled.button`
background-color:black;
color: #fff;
padding:10px 18px;
min-width:220px;
border-radius: 5px;
border:none;
font-size:16px;
border:1px solid transparent;
transition:0.4s background-color ease-in;
cursor:pointer;
&:hover{
    background-color:#fff;
    color:black;
    border:1px solid black;
    transition:0.3s background-color ease-in;
}
`
const OutlineButton=styled(Button)`//all properties of Button copy to outline 
  background-color:white;
  border:1px solid black;
  color: black;
  transition:0.4s background-color ease-in;
  border-radius: 5px;

  &:hover{
    background-color:black;
    color:white;
    border:1px solid white;
    transition:0.3s background-color ease-in;
}
`
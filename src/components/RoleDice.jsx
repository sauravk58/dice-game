import React from 'react'
import styled from 'styled-components'
import {useState} from  'react'
const RoleDice = ({currentDice,roleDice}) => {
    
  return (
    <DiceContainer>
        <div className="dice"
        onClick={roleDice}>{/*value pass krna hai then call back use kro*/}
            <img src={`/images/dice_${currentDice}.png`} alt="dice 1"></img>{/*here we use template literals in js */}
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top: 40px;
    .dice{
        cursor:pointer;
    }
    p{
        font-size:24px;
    }
`
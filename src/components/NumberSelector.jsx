import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arr= [1,2,3,4,5,6];
    
    const numberSelectorHandler=(val)=>{
        setSelectedNumber(val);
        setError("");
    }
  return (
    <NumberSelcetorContainer>
        <p className="error">{error}</p>
        <div className="flex">
        {
            arr.map((val,i)=>{
                return <Box key={i}
                isSelected={val==selectedNumber}//use props to color the selected box.
                onClick={()=>numberSelectorHandler(val)}>{val}</Box>; //here we have to give a key to trace the element in react so that it can identify. //to pass a value we have to use call back function.
            })
        }
        </div>
       <p>Select Number</p>
    </NumberSelcetorContainer>
  )
}

export default NumberSelector;

const Box=styled.div`
    height:72px;
    width:72px;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props)=>(props.isSelected?"black":"white")};//use $ symbol to get the value and pass call back function;
    color:${(props)=>(props.isSelected? "white" : "black")};
`
const NumberSelcetorContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    .error{
        color:red;
        font-weight:500;
    }
    .flex{display:flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:700;
    }
`
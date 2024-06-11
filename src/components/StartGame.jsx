import React from 'react'
import styled from 'styled-components';
const StartGame = (props) => {
  return (
    <Container>
    <div><img src="/images/dices.png"></img></div>
    <div className="content">
    <h1>Dice Game</h1>
    <Button onClick={props.toggle}>Play Now</Button> {/*to call a function using props we don't need to use callback */}
    </div>
    </Container>
  )
}

export default StartGame;

const Container=styled.div`
max-width:1180px;
display:flex;
align-items:center;
margin:0 auto;
.content h1{
    font-size: 96px;
    white-space:nowrap;//means text will not divided into parts.
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
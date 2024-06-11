import React from 'react'
import styled from 'styled-components';
const TotalScore = (props) => {
  return (
    <ScoreContainer>
      <div>
        <h1>{props.score}</h1>
      </div>
        <p>Total Score</p>
        
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`

    max-width:200px;
    text-align:center;
    /* padding-bottom:40px; */
    div h1{
     
        line-height:100px;
        font-size: 100px;
        margin-top: 30px;
        margin-bottom: -14px;
    }
     p{
        
        font-size:24px;
        font-weight:700;
        /* padding-bottom: 40px; */
    }
`
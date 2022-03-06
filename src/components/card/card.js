import React from 'react'
import styled from 'styled-components'

const Card= (props) => {
  return (
    <Container tleft={props.tleft} bleft={props.tleft} tright={props.tright} bright={props.tright} background={props.background}>
        <Wrapper>
            <Icon  src={props.icon} alt="car"/>
            <CarName>{props.carname}</CarName>
            <Content>
            {props.content}
            </Content>
            <Btn style={{color: props.bcolor}}>Learn More</Btn>
        </Wrapper>
    </Container>
  )
}
export default Card;

const Container=styled.div`
height: 800px;
width: 500px;
background: ${({background})=>background};
display: flex;
justify-content: center;
border-top-left-radius: ${({tleft})=>tleft};
border-bottom-left-radius: ${({bleft})=>bleft};
border-top-right-radius: ${({tright})=>tright};
border-bottom-right-radius: ${({bright})=>bright};
`
const Wrapper=styled.div`
height: 80%;
width: 70%
`
const Icon=styled.img`
width: 110px;
margin-top: 80px;
margin-bottom: 50px;
`
const Content=styled.div`
font-size: 22px;
color: #fff;
width: 300px;
line-height: 40px;
`
const Btn=styled.button`
padding: 25px;
padding-left: 50px;
padding-right: 50px;
outline: none;
border: none;
border-radius: 50px;
font-size: 22px;
font-weight: 550;
margin-top: 170px;
`
const CarName=styled.div`
font-size: 50px;
color: #fff;
font-weight: bold;
margin-bottom: 20px;
`



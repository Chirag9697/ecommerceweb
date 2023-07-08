import React from 'react'
import styled from '@emotion/styled';
import { useState } from 'react';
import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
const Container=styled.div`
    width:100%;
    margin-top:20px;
    height:100vh;
    display:flex;
    // background-color:co  ral;
    position:relative;
    overflow:hidden;    
`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==='left' && "10px"};
    right:${props=>props.direction==='right' && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`
const Wrapper=styled.div`
    height:100%;
    display:flex;
    transition:all 1.5s ease;   
    transform:translateX(${(props)=>props.slideindex*(-100)}vw);
`

const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props=>props.bg}
`
const ImgContainer=styled.div`
    height:100%;
    flex:1;

`
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
`
const Image=styled.img`
    height:80%;
`
const Title=styled.h1`
    font-size:70px;
`;

const Desc=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`


function Slider() {
    const[slideindex,setSlideindex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==='left'){
            setSlideindex(slideindex>0?slideindex-1:2);
        }
       else{
            // console.log("hello");
            console.log(slideindex);
            setSlideindex(slideindex<2?slideindex+1:0);
         }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideindex={slideindex}>
        <Slide bg='f5fafd'>
        <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
            
        </ImgContainer>
        <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T  COMPROMISE  ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
        <Slide bg='f5fafd'>
        <ImgContainer>
            <Image src="https://img.freepik.com/premium-photo/sales-fashion-store-surprised-happy-woman-with-hair-bun-stylish-clothes-pointing-shopping-bags-expressing-shock-amazement-showing-purchases-studio-shot-isolated-blue-background_416530-24160.jpg?size=626&ext=jpg&ga=GA1.1.74266496.1687601079&semt=sph"/>
            
        </ImgContainer>
        <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>DON'T  COMPROMISE  ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
        <Slide bg='f5fafd'>
        <ImgContainer>
            <Image src="https://img.freepik.com/premium-photo/happy-woman-holding-shopping-bags-smiling-mall_217236-1446.jpg?w=740"/>
            
        </ImgContainer>
        <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>DON'T  COMPROMISE  ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider;

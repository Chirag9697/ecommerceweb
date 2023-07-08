import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Container=styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:250px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    position:relative;
`

const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image=styled.img`
    height:100%;  
    width:100%;
    z-index:2;
`
const Info=styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    &:hover{
        opacity:1;
    }
`
const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    padding-left:12px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-contents:center; 
    margin:10px;
    cursor:pointer;
    transition:all 0.5s ease;
    &:hover{ 
        background-color:gray;
        transform:scale(1.1);
    }   

`


function Product({item}) {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartIcon/>                
            </Icon>
            <Icon>
                <SearchIcon/>             
            </Icon>
            <Icon>
                <FavoriteIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product

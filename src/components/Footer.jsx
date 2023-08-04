// import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { MapOutlined } from '@material-ui/icons';
import {mobile} from '../responsive'

const Container=styled.div`
    display:flex;
  ${mobile({flexDirection:"column"}  )}

`
const Left=styled.div`
    flex:0.8;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
    margin:20px 0px;
`
const SocialContainer=styled.div`
    display:flex;
    
`
const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;

`
const Center=styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"}  )}
`
const Title=styled.h3`
    margin-bottom:30px;
`
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const Listitem=styled.li`
    width:50%;
    margin-bottom:10px;

`

const Right=styled.div`
    flex:1;
    padding:20px;
  ${mobile({backgroundColor:"#fff8f8"}  )}
`
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Payment=styled.img`
    width:50%;  

    
`
function Footer() {
  return (
    <Container>
        <Left>
            <Logo>
                LAMA.
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit velit aliquam 
                libero maiores hic vitae, ipsa tempore minus? Accusantium? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Rerum dignissimos sequi unde labore omnis amet 
                quidem culpa expedita.Quaerat, nulla? Ea, culpa odit! Natus ut, maxime consectetur
                dolorum exercitationem quos?
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">    
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">     
                    <InstagramIcon/>
                </SocialIcon>
                
               
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Man Fashion</Listitem>
                <Listitem>women Fashion</Listitem>
                <Listitem>Accessories</Listitem>
                <Listitem>My Account</Listitem>
                <Listitem>Order tracking</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Terms</Listitem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{marginRight:"10px"}}/> 622 dixistreet,california</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight:"10px"}}/> +123 9410481290</ContactItem>
            <ContactItem><MailIcon style={{marginRight:"10px"}}/> contact@lama.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer

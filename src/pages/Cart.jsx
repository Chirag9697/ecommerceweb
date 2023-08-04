import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer  from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import {mobile} from '../responsive'

const Container=styled.div`

`;

const Wrapper=styled.div`
    padding:20px;
  ${mobile({padding:"10px"}  )}
`;

const Title=styled.h1`
    font-weight:300;    
    text-align:center;
`;

const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type==='filled' && 'none'};
    // border:${props=>props.type==='filled' && 'none'};
    background-color:${(props)=>props.type==='filled'? "black" : "transparent"};
    color:${(props)=>props.type==="filled" && "white"};
`;
const TopTexts=styled.div`
  ${mobile({displat:"none"}  )}

`
const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`
const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
  ${mobile({flexDirection:"column"}  )}

`;
const Info=styled.div`
    flex:3;
`;

const Product=styled.div`
    display:flex;
    justify-content:space-between;
  ${mobile({flexDirection:"column"}  )}


`;
const ProductDetail=styled.div`
    flex:2;
    display:flex;
`;
const Image=styled.img`
    margin:10px;
    width:200px;
`;
const Details=styled.div`
        padding:20px;
        display:flex;
        flex-direction:column;  
        justify-content:space-around;
`;

const ProductName=styled.span`
`

const ProductId=styled.span`

`
const ProductColor=styled.span`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color}
`
const ProductSize=styled.span`
`
const PriceDetail=styled.span`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;

`   
const ProductAmount=styled.div`
    font-size:24px;
    margin:5px;
  ${mobile({margin:"5px 15px"}  )}

`
const ProductPrice=styled.div`
    font-size:30px;
    font-weight:200;
  ${mobile({marginBottom:"20px"}  )}

`
const Summary=styled.div`
    flex:1;
    // background-color:red;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    margin:0px 10px
    height:50vh;  
`;

const  SummaryTitle=styled.h1`
    font-weight:200;
`
const  SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-between:space-between;
    font-weight:${props=>props.type==="total" && "500"};
    font=size:${props=>props.type==="total" && "500"};
`
const  SummaryItemText=styled.span`
`
const  SummaryItemPrice=styled.span`
`
const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:60;
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
            <Announcement/>  
                <Wrapper>
                    <Title>Your Bag</Title>
                    <Top>
                        <TopButton>Continue shopping</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">Checkout</TopButton>

                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                        <Image src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
                                        <Details>
                                            <ProductName><b>Product:</b> Jessie thunder shoes</ProductName>
                                            <ProductId><b>ID:</b> 9320948001</ProductId>
                                            <ProductColor color="black"/>
                                            <ProductSize><b>SIZE:</b>37.5</ProductSize>
                                        </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>2</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$2000</ProductPrice>
                                </PriceDetail>
                        {/* <Summary>Summary</Summary> */}
                            </Product>
                            <hr />
                            <Product>
                                <ProductDetail>
                                        <Image src="https://www.stoneycreek.co.nz/image/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/4/5/4542/thumb555x555/480736779/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy.jpg"/>
                                        <Details>
                                            <ProductName><b>Product:</b> Jessie shirts</ProductName>
                                            <ProductId><b>ID:</b> 9320948001</ProductId>
                                            <ProductColor color="blue"/>
                                            <ProductSize><b>SIZE:</b>37.5</ProductSize>
                                        </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>2</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$2000</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <hr />
                        </Info>
                        <Summary>
                            <SummaryTitle>Order Summary</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemText>$80</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated shipping</SummaryItemText>
                                <SummaryItemText>$5.90</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemText>$-5.90</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText type="total">total</SummaryItemText>
                                <SummaryItemText>$80</SummaryItemText>
                            </SummaryItem>
                            <TopButton>Checkout NOW</TopButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
                <Footer/>
    </Container>
  )
}

export default Cart

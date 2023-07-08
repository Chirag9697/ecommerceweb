import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
const Container=styled.div`

`

const Wrapper=styled.div`
    padding:50px;
    display:flex;
`

const ImgContainer=styled.div`
    flex:1;
`

const Image=styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`

const InfoContainer=styled.div`
    flex:1;
    padding:0px 50px;
`

const Title=styled.h1`
    font-weight:200;
`

const Desc=styled.p`
    margin:20px 0px;
`

const Price=styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;

`
const Filter=styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`
const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption=styled.option`
`
const AddContainer=styled.option`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
    &:hover{
        background-color:white;
    }
`

const Button=styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
`


function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis, nisi illo veniam sed quod quam atque ratione 
                    quia aliquam dolor architecto tempore recusandae vitae! 
                    Assumenda sint tempore nulla amet minus.</Desc>
                <Price> $ 20 </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                       <Remove/>
                       <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product

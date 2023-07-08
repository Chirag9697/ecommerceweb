import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar' 
import Announcement  from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'; 
const Container=styled.div`

`
const Title=styled.h1`
  margin:20px;
`
const FilterContainer=styled.div`
  display:flex;
  justify-content:space-between;
` 
const Filter=styled.div`
  margin:20px;
`

const FilterText=styled.span`
  font-size:20px;
  font-weight:600;
  margin-right:20px;

`
const Select=styled.select`
  padding:10px;
  margin-right:20px;
  background-color:white;
  border:1px solid black ;
`
const Option=styled.option`
`
function ProductList() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses </Title>
      <FilterContainer>
        <Filter>
            <FilterText>
               filter Products
            </FilterText>
            <Select>
              <Option disabled selected>Color</Option>
              <Option>white</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>Size</Option>
              <Option>XL</Option>
              <Option>2XL</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
            </Select>
        </Filter>
       
        <Filter>
            <FilterText>
                 Sort Products
            </FilterText>
            <Select>
              <Option selected>Newest</Option>
              {/* <Option>XL</Option> */}
              {/* <Option>2XL</Option> */}
              <Option>Price ascending order</Option>
              <Option>Price descending order</Option>
              {/* <Option>L</Option> */}
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList

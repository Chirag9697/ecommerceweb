import React from 'react'
import  styled from 'styled-components';
import {categories} from '../data'
import CategoryItem from './CategoryItem';
const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
`

function Categories() {
  return (
    <Container> 
        {
          categories.map((category)=>{
            return <CategoryItem item={category}/>
          })
        }
    </Container>
  )
}


export default Categories

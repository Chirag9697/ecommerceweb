import React from 'react'
import {popular} from '../data';
import  styled  from 'styled-components';
import Product from './Product';

const Container=styled.div`
    padding:20px;
    display:flex;
    // flex-wrap:wrap;
    justify-content:space-between; 
    overflow:scroll;
`

function Products() {
  return (
    <Container>
        {
            popular.map((prod)=>{
                return <Product item={prod} key={prod.id}/>
            })
        }
    </Container>
  )
}

export default Products

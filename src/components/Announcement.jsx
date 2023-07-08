// import { style } from '@mui/system'
import styled from '@emotion/styled'
import React from 'react'
const Container=styled.div`
    margin-top:10px;
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:14px;
    font-size:14px;
    font-weight:500;
`
export default function Announcement() {
  return (
        <Container>
            Super deal ! Free shipping on orders over $50
        </Container>
  )
}

import React from 'react';
import styled from "styled-components"
import './App.css';




const Home = props => {
    return(
<Head>
<h1>Welcome to jose's pizzaria online!</h1>

<h2>Select "place your order" to place an order. enjoy!</h2>
</Head>
    )
}
const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: black;
    padding: 10px 0px;
`


export default Home;
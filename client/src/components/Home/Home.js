import React, { Component } from 'react';
import styled from 'styled-components'

const CityContainer = styled.div `
    border: 1px solid grey;
    margin: 40px 120px;
    box-shadow: 3px 3px 10px grey;
    img {
        width: 400px;
        height: 250px;
        background: grey;
    }
    h3 {
        text-align: center;
    }
`
const CityList = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

class HomePage extends Component {
    render() {
        return (
            <CityList>
                <CityContainer>
                    <img src="../../../images/placeholder-4-500x300.png" alt="city" />
                    <h3>City 1</h3>
                </CityContainer>
                <CityContainer>
                    <img src="../../../images/placeholder-4-500x300.png" alt="city" />
                    <h3>City 2</h3>
                </CityContainer>
                <CityContainer>
                    <img src="../../../images/placeholder-4-500x300.png" alt="city" />
                    <h3>City 3</h3>
                </CityContainer>
                <CityContainer>
                    <img src="../../../images/placeholder-4-500x300.png" alt="city" />
                    <h3>City 4</h3>
                </CityContainer>
            </CityList>
        );
    }
}

export default HomePage;
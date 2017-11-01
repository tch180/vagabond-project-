import React, {Component} from 'react';
import styled from 'styled-components'
import {Parallax} from 'react-parallax'

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

const HeroContainer = styled.div `
    height: 60vh;
    background-image: url('../../../images/Seattle-Wallpaper-24.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    div {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        h1{
            font-size: 4em;
        }
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <Parallax bgImage="../../../images/Seattle-Wall            paper-24.jpg" strength={400}>
                <HeroContainer>
                <h1> some content that is displayed above the bgImage </h1>
                </HeroContainer>
            </Parallax> */}
                <HeroContainer>
                    <div>
                        <h1>Welcome to Vagabong Travel</h1>
                    </div>
                </HeroContainer>
                <CityList>
                    <CityContainer>
                        <img src="../../../images/placeholder-4-500x300.png" alt="city"/>
                        <h3>City 1</h3>
                    </CityContainer>
                    <CityContainer>
                        <img src="../../../images/placeholder-4-500x300.png" alt="city"/>
                        <h3>City 2</h3>
                    </CityContainer>
                    <CityContainer>
                        <img src="../../../images/placeholder-4-500x300.png" alt="city"/>
                        <h3>City 3</h3>
                    </CityContainer>
                    <CityContainer>
                        <img src="../../../images/placeholder-4-500x300.png" alt="city"/>
                        <h3>City 4</h3>
                    </CityContainer>
                </CityList>
            </div>
        );
    }
}

export default HomePage;
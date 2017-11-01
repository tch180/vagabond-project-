import React, {Component} from 'react';
import styled from 'styled-components'
import {Parallax} from 'react-parallax'

const CityContainer = styled.div `
    background: #984343;
    border: 1px solid grey;
    margin: 40px 120px;
    box-shadow: 3px 3px 10px #99864A;
    img {
        width: 400px;
        height: 250px;
        background: grey;
    }
    h3 {
        text-align: center;
    }
    @media only screen and (max-width: 400px) {
        margin: 10px 0px;
        img {
            width: 250px;
            height: 150px;
        }
    }
`
const CityList = styled.div `
    background: #233237;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #18121E;
    @media
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
    @media only screen and (max-width: 400px) {
        h1{
            font-size: 1em;
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
                        <img src="../../../images/atlanta.jpg" alt="city"/>
                        <h3>Atlanta</h3>
                    </CityContainer>
                    <CityContainer>
                        <img src="../../../images/rome-skyline-wallpaper-wallpaper-2.jpg" alt="city"/>
                        <h3>Vatican City</h3>
                    </CityContainer>
                    <CityContainer>
                        <img src="../../../images/skyline-seattle_3461539a.jpg" alt="city"/>
                        <h3>Seatle</h3>
                    </CityContainer>
                    <CityContainer>
                        <img src="../../../images/b09b58dff54f7d4c1e2a80415c03e40a.jpg" alt="city"/>
                        <h3>Dubai</h3>
                    </CityContainer>
                </CityList>
            </div>
        );
    }
}

export default HomePage;
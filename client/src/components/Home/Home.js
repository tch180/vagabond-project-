import React, {Component} from 'react';
import styled from 'styled-components'
import {Parallax} from 'react-parallax'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

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
    a {
        text-decoration: none;
    }
    h3 {
        text-align: center;
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        margin: 3px;
    }
    @media only screen and (max-width: 420px) {
        margin: 10px 10px;
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
    align-items: center;
    flex-wrap: wrap;
    color: #18121E;
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
    @media only screen and (max-width: 420px) {
        height: 36vh;
        div {
            h1{
            font-size: 1em;
            }
        }
    }
`

class HomePage extends Component {
    state = {
        cities: []
    }
    
    async componentWillMount() {
        try {
            const res =await axios.get('/api/cities')
            console.log(res.data.id)
            this.setState({ cities: res.data})
        }catch(error){
            console.log(error)
        }
        
    }
    
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
                    {this.state.cities.map((city, index) => {
                        return ( <CityContainer key={index}><Link to={`/city/${city.id}`}>
                            <img src={city.image}/>
                            <h3>{city.name}</h3>
                            </Link>
                        </CityContainer>
                        

                        )
                    })}
                  
                </CityList>
            </div>
        );
    }
}

export default HomePage;
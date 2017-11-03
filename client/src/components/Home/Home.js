import React, {Component} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CityContainer = styled.div `
    background: #984343;
    border: 1px solid grey;
    margin: 40px 120px;
    box-shadow: 3px 3px 10px #18121E;
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

const ParallaxContainer = styled.div `
    height: 70vh;
  	background-repeat: no-repeat;
  	background-attachment: fixed;
  	background-size: cover;
    background-position: center;
    position: relative;
    background-image: url('../../../images/Seattle-Wallpaper-24.jpg');
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
            text-align: center
        }
    }
    @media only screen and (max-width: 668px) {
        height: 50vh;
        div {
            h1{
            font-size: 2em;
            }
        }
    }
    @media only screen and (max-width: 420px) {
        height: 35vh;
        background-size: auto;
        div {
            h1{
            font-size: 2em;
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
            this.setState({ cities: res.data})
            console.log(this.state.cities)
        } catch(error){
            console.log(error)
        }
        
    }
    
    render() {
        return (
            <div>
                {/* this adds the paralax function to our background image  */}
            <ParallaxContainer>
                <div>
                    <h1>Welcome to Vagabong Travel</h1>
                </div>
            </ParallaxContainer>
            {/* this will map through all current cities added to the database */}
                <CityList>
                    {this.state.cities.map((city, index) => {
                        return (<CityContainer key={index}>
                        <Link to={{ pathname: `/${city.name}`, state: {id: city.id} }}>
                        <img src={city.image} alt={city.name} />
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
import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CityContainer = styled.div`
display: flex;
text-align:center;
justify-content: center;
background-color: #233237;
color: white;
`

const NewCityContainer = styled.div`
background: #984343;
border: 1px solid grey;
padding: 20px;
box-shadow: 3px 3px 10px #18121E;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 3vh;
width: 90%;

h2 {
    margin: 0px;
}

forM {
    width: 100%;
}

button {
    background: #EAC67A;
    color: white;
    font-weight: bolder;
    text-decoration: none;
    text-align: cneter;
    letter-spacing: .1em;
    font-size: 1rem;
    border: none;
    margin: 5px;
    border-radius: 2px;
    height: 36px;
    line-height: 36px;
    padding: 0 2rem;
    text-transform: uppercase;
    box-shadow: 0 2px 2px 0 rgba(24,18,30, .14),
    0 1px 5px 0 rgba(24,18,30, .12),
    0 3px 1px -2px rgba(24,18,30, .12);
    &:hover {
        background: rgb(198, 165, 103);
    }
}

    input {
        margin: 10px 0px;
        font-size: 1.8em;
        background: #984343;
        box-shadow: 2px 2px 5px grey;
        color: white;
        border: 2px solid white;
        width: 85%;
        padding: 10px;
        &::placeholder {
        color: white;
        }
        @media only screen and (max-width: 420px) {
            width: 95%;
            font-size: .9em;
         }
    }
    
    textarea {
        margin: 10px 0px;
        font-size: 1.8em;
        background: #984343;
        box-shadow: 2px 2px 5px grey;
        color: white;
        border: 2px solid white;
        width: 85%;
        height: 35vh;
        padding: 10px;
        &::placeholder {
        color: white;
        }
        @media only screen and (max-width: 420px) {
            width: 95%;
            font-size: .9em;
         }
    }

`

class CityNew extends Component {
    state = {
        city: {
            name: '',
            country: '',
            region: '',
            image: ''
        },
        redirectToHome: false
    }

    handleChange = (event) => {
        const updateCity = {
            ...this.state.city
        }
        updateCity[event.target.name] = event.target.value
        this.setState({ city: updateCity })
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/cities/`, { city: this.state.city })
        this.setState({ redirectToHome: true })

    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={'/'} />
        }
        return (
            <CityContainer>

                {/* newcitycontainer will not allow the empty required fields on the front in to correspond to the backend requirements */}
                <NewCityContainer>
                    <form onSubmit={this.handleSubmit}>
                        <h2>New City</h2>
                        <input
                            placeholder='City Name'
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            required
                            value={this.state.city.name} />
                        <input
                            placeholder='Region'
                            onChange={this.handleChange}
                            name="region"
                            type="text"
                            required
                            value={this.state.city.region} />
                        <input
                            placeholder='Country'
                            onChange={this.handleChange}
                            name="country"
                            type="text"
                            required
                            value={this.state.city.country} />

                        <input
                            placeholder='Picture'
                            onChange={this.handleChange}
                            name="image"
                            type="text"
                            required
                            value={this.state.city.image} />


                        <div>
                            <button>Create City</button>
                        </div>
                    </form>
                </NewCityContainer>


            </CityContainer>
        );
    }
}

export default CityNew;


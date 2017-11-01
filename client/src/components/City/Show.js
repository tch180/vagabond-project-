import React, { Component } from 'react';
import styled from 'styled-components'
import { Parallax } from 'react-parallax'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
display: flex;
flex-direction: column;

`
const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
text-align: center;
img {
max-width: 100%;
height: 500px;
}
`
const PostContainer = styled.div`
display: flex;
flex-direction: row;
align-self: center;
`
const InfoBar = styled.div`

`

class CityShow extends Component {
    state = {
        cities: {
            posts: []
        }
    }
    
    async componentWillMount() {
     this.getCityInfo()
        
    }
    getCityInfo = async () => {
        try {
            const cityId = this.props.match.params.cityId
            
            const res = await axios.get(`/api/cities/${cityId}`)
            console.log(res.data)
            this.setState({ cities: res.data})
        }catch(error){
            console.log(error)
        }
    }
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <div><img src={this.state.cities.image} /></div><br />
                   <InfoBar>City: {this.state.cities.name} Region: {this.state.cities.region} Country: {this.state.cities.country}</InfoBar>
                </HeaderContainer>
                <PostContainer>
                    
                    {this.state.cities.posts.map(post => {
                        return( 
                        <div>
                            <div>{post.title}</div>
                        </div>)
                    })}
                    
                    
                </PostContainer>
            </Container>
        );
    }
}

export default CityShow;
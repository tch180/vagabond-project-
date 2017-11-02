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
margin: 0px;
img {
max-width: 100%;
height: 500px;
}
`
const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
text-align: center;
margin: 10px;
padding: 10px;

`
const InfoBar = styled.div`
background: #984343;
width: 100%;
padding: 0px;
margin: 0px;
`
const PostBlock = styled.div`
background: #984343;
padding: 15px;
margin: 5px;
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
                        <PostBlock>
                            <div><b>{post.title}</b></div>
                            <div>{post.body}</div>
                        </PostBlock>)
                    })}
                    
                    
                </PostContainer>
            </Container>
        );
    }
}

export default CityShow;
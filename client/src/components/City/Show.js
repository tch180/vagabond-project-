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
`
const PostContainer = styled.div`
display: flex;
flex-direction: row;
align-self: center;
`

class CityShow extends Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <div>Image</div>
                    <div>Nav</div>
                </HeaderContainer>
                <PostContainer>
                    <div>This is a post!</div>
                    <div>This is a post!</div>
                    <div>This is a post!</div>
                    <div>This is a post!</div>
                    <div>This is a post!</div>
                    
                </PostContainer>
            </Container>
        );
    }
}

export default CityShow;
import React, { Component } from 'react';
import styled from 'styled-components'
import { Parallax } from 'react-parallax'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import ShowPost from '../Post/ShowPost'



const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #233237;
boarder-radius: 20px;


`
const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
text-align: center;
margin: 0px;
img {
max-width: 100%;
max-height: 60vh;
margin-top: 20px;
box-shadow: 3px 3px 10px #18121E;
}
`
const AddPost = styled.div`
    display: flex;
    justify-content: center;
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
    a {
        text-deocration: none;
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
display: flex;
justify-content: center;
align-items: center;
background: #984343;
box-shadow: 3px 3px 10px #18121E;
width: 100vw;
padding: 0px;
margin: 0px;
h2 {
    margin: 2px 0px;
}
`
const PostBlock = styled.div`
background: #984343;
padding: 15px;
margin: 5px;
box-shadow: 3px 3px 10px #18121E;
border: 3px solid black;
border-radius: 35px;
font-weight: bold;
@media only screen and (max-width: 668px) {
    font-weight: normal;
`

class CityShow extends Component {
    state = {
        cities: {
            posts: []
        },
        togglePostView: false,
        currentPost: {
            title: '',
            body: ''
        }
    }

    async componentWillMount() {
        this.getCityInfo()

    }
    getCityInfo = async () => {
        try {
            const cityId = this.props.match.params.cityId

            const res = await axios.get(`/api/cities/${cityId}`)
            this.setState({ cities: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    handleUpdateChange = (event) => {
        const attribute = event.target.name
        const updatePost = { ...this.state.currentPost }
        updatePost[attribute] = event.target.value
        this.setState({ currentPost: updatePost })
    }

    handleUpdateSubmit = async (postId) => {
        const cityId = this.props.match.params.cityId
        const res = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {
            post: this.state.currentPost
        })
        const city = res.data
        this.setState({ cities: city })
    }

    toggleSwitch = () => {
        this.setState({ togglePostView: !this.state.togglePostView })
    }


    deletePost = async (postId) => {
        const cityId = this.props.match.params.cityId
        console.log(this.props.match.params.cityId)
        const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
        const city = res.data
        this.setState({ cities: city })
    }

    showPost = (index) => {
        this.toggleSwitch()
        const post = this.state.cities.posts[index]
        this.setState({ currentPost: post })
    }

    render() {
        const postView = this.state.togglePostView ?
            <ShowPost post={this.state.currentPost}
                deletePost={this.deletePost}
                toggleSwitch={this.toggleSwitch}
                handleUpdateChange={this.handleUpdateChange}
                handleUpdateSubmit={this.handleUpdateSubmit} /> :
            <PostContainer>
                {this.state.cities.posts.map((post, index) => {
                    return (
                        <PostBlock key={index} onClick={() => this.showPost(index)}>
                            <div>{post.title} ({post.rating}/10)</div>
                        </PostBlock>)
                })}


            </PostContainer>

        return (
            <Container>
                <HeaderContainer>
                    <InfoBar><h2>{this.state.cities.name} - {this.state.cities.region} - {this.state.cities.country}</h2></InfoBar>
                    <div><img src={this.state.cities.image} /></div><br />

                </HeaderContainer>
                <div>
                    <AddPost><Link to={`/city/${this.props.match.params.cityId}/NewPost`}><button>Add Post</button></Link></AddPost>
                    {postView}
               </div>
            </Container>
        );
    }
}

export default CityShow;
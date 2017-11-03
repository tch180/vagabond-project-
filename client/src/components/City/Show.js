import React, { Component } from 'react';
import styled from 'styled-components'
import { Parallax } from 'react-parallax'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import ShowPost from '../Post/ShowPost'

const notPostContainer = styled.div`
display: flex;
text-align:center;
justify-content: center;
background-color: #233237;
color: white;
border: 1px solid grey;
height: 90vh;
`


const Container = styled.div`
display: flex;
flex-direction: column;
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
height: 500px;
box-shadow: 3px 3px 10px #99864A;
}
`
const AddPost = styled.div`
background: #984343;
padding: 15px;
margin: 5px;
max-width: 25vw;
color: white;
a {
text-decoration: none;
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
border: 3px solid black;
    border-radius: 35px;
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
                {/* <Link to="/city/${}" */}
                {this.state.cities.posts.map((post, index) => {
                    return (
                        <PostBlock key={index} onClick={() => this.showPost(index)}>
                            <div><b>{post.title}</b></div>
                        </PostBlock>)
                })}


            </PostContainer>

        return (
            <Container>
                <HeaderContainer>
                    <InfoBar>City: {this.state.cities.name} Region: {this.state.cities.region} Country: {this.state.cities.country}</InfoBar>
                    <div><img src={this.state.cities.image} /></div><br />

                </HeaderContainer>
                <div>
                    <center><Link to={`/city/${this.props.match.params.cityId}/NewPost`}><AddPost>Add Post</AddPost></Link></center>
                    {postView}
               </div>
            </Container>
        );
    }
}

export default CityShow;
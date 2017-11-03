import React, {Component} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const PostContainer = styled.div `
display: flex;
text-align:center;
justify-content: center;
background-color: #233237;
color: white;
`

const NewPostContainer = styled.div `
background: #984343;
border: 1px solid grey;
padding: 20px;
box-shadow: 3px 3px 10px #99864A;
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
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
    0 1px 5px 0 rgba(0, 0, 0, .12),
    0 3px 1px -2px rgba(0, 0, 0, .12);
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

class NewPost extends Component {
    state = {
        post: {
            title: '',
            body: '',
            image: ''
        },
        redirectToPost: false
    }

    handleChange = (event) => {
        const updatePost = {
            ...this.state.post
        }
        updatePost[event.target.name] = event.target.value
        this.setState({post: updatePost})
    }
    handleSubmit = async(event) => {
        event.preventDefault()
        const cityId = this.props.match.params.cityId
        const res = await axios.post(`/api/cities/${cityId}/posts`, {post: this.state.post})
        this.setState({redirectToPost: true})

    }
    render() {
        if (this.state.redirectToPost) {
            return <Redirect to={`/city/${this.props.match.params.cityId}`}/>
        }
        return (

            <PostContainer>

                
                    <NewPostContainer>
                    <form onSubmit={this.handleSubmit}>
                            <h2>New Post</h2>
                        <input
                            placeholder='Title of your post'
                            onChange={this.handleChange}
                            name="title"
                            type="text"
                            value={this.state.post.title}/>
                            <input
                                placeholder='Ratings'
                                className="rating"
                                onChange={this.handleChange}
                                name="rating"
                                type="number"
                                max='10'
                                min='1'
                                value={this.state.post.rating}/>

                            <input
                                placeholder='Picture'
                                onChange={this.handleChange}
                                name="image"
                                type="text"
                                value={this.state.post.image}/>

                            <textarea
                                value={this.state.post.body}
                                htmlFor="body"
                                placeholder="Please enter your Review"
                                name="body"
                                onChange={this.handleChange}/>
                        <div>
                        <button>Post!</button>
                        </div>
                        </form>
                    </NewPostContainer>


            </PostContainer>
        );
    }
}

export default NewPost;
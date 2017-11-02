import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const PostContainer = styled.div`
display: flex;
text-align:center;
justify-content: center;
background-color: #233237;
color: white;
border: 1px solid grey;
height: 90vh;
`

const NewPostContainer = styled.div `
background: #984343;
border: 1px solid grey;
margin: 40px 120px;
box-shadow: 3px 3px 10px #99864A;
width: 35vw;
height: 45vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

button {
    color: black;
    background:white;
}

div {
    padding: 10px 0px;
    /* margin: 10px; */
}
textarea {
    width: 25vw;
    height: 15vh;

`






class NewPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        },
        redirectToPost: false,
    }
    
        handleChange = (event) => {
            const updatePost = { ...this.state.post }
            updatePost[event.target.name] = event.target.value
            this.setState({ post: updatePost })
        }
        handleSubmit = async (event) => {
            event.preventDefault()
            const cityId = this.props.match.params.cityId
            const res = await axios.post(`/api/cities/${cityId}/posts`, {
                post: this.state.post
            })
            this.setState({redirectToPost: true})
            
        }
        render() {
            if (this.state.redirectToPost) {return <Redirect to={`/city/${this.props.match.params.cityId}`} />}
        return (
            
            <PostContainer>
                <NewPostContainer>

                <div><h2>New Post</h2></div>

                
                <form onSubmit={this.handleSubmit}>

                    <div><input placeholder='Title of your post' onChange={this.handleChange} name="title"
                type="text" value={this.state.post.title} /></div>
                       
         <div>   <input placeholder='Ratings' className="rating"
                            onChange={this.handleChange} name="rating"
                            type="number" max='10' min='1' value={this.state.post.rating}/> </div>
                    
                       
          <div>  <input placeholder='Picture'
                            onChange={this.handleChange} name="image"
                            type="text" value={this.state.post.image}/></div>
                  
                
              <div>
             <textarea  value={this.state.post.body} htmlFor="body"
                           placeholder="Please enter your Review" name="body" onChange={this.handleChange}/></div>
                           
                    
                    
                    <button>Post!</button>
                </form>
              
                </NewPostContainer>
            </PostContainer>
        );
    }
}

export default NewPost;
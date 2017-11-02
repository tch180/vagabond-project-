import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const PostContainer = styled.div`
display: flex;
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
                <div>New Post</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={this.handleChange} name="title"
                            type="text" value={this.state.post.title}
                        />
                    </div>
                    <div>
                        <label >Body</label>
                         
                            <textarea  value={this.state.post.body} htmlFor="body"
                            name="body" onChange={this.handleChange}/>
                           
                    </div>
                    
                    <button>Post!</button>
                </form>
            </PostContainer>
        );
    }
}

export default NewPost;
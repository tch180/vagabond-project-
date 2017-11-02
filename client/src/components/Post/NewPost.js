import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const PostContainer = styled.div`
display: flex;
`
class NewPost extends Component {
    state = {
        post: [],
        redirectToPost: false,
        postId: ''
    }
    
        handleChange = (event) => {
            const updatePost = { ...this.state.post }
            this.setState({ post: updatePost })
        }
        handleSubmit = async (event) => {
            event.preventDefault()
            const cityId = this.props.match.params.cityId
            const res = await axios.post(`/api/cities/${cityId}/posts`)
        }
        render() {
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
                            name="body" type="text" text onChange={this.handleChange}/>
                           
                    </div>
                    
                    <button>Post!</button>
                </form>
            </PostContainer>
        );
    }
}

export default NewPost;
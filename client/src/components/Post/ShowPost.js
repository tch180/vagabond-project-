import React, {Component} from 'react';
import styled from 'styled-components'


const PostContainer = styled.div `
    background: #984343;
    margin: 20px 150px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const PostContent = styled.div `
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 65vw;
    font-size: 1.4em;
    img {
        width: 350px;
    }
    
`

class ShowPost extends Component {
    state = {
        toggleUpdate: false,
        toggleDelete: false
    }

    showUpdateForm = (event) => {
        if(this.state.toggleUpdate == true) {
            this.handleSubmit(event)
        }
        this.setState({
            toggleUpdate: !this.state.toggleUpdate
        })
    }

    handleChange = (event) => {
        this.props.handleUpdateChange(event)
    }

    showDelete =() => {
        this.setState({
            toggleDelete: !this.state.toggleDelete
        })
    }

    
    delete = (e) => {
    e.preventDefault()
    this.props.deletePost(this.props.post.id)
    this.props.toggleSwitch()
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleUpdateSubmit(this.props.post.id)
    }

    render() {
        const deleteConfirmation = <div>
            <h2>Are you sure?</h2>
            <button onClick={this.delete}>Yes</button>
            <button onClick={this.showDelete}>No</button>
        </div>

        const post = <PostContent>
            <h1>{this.props.post.title}</h1>
            <img src={this.props.post.image} alt={this.props.post.title} />
            <p>{this.props.post.body}</p>
        </PostContent>
        const updateView = <div>
            <input name="title" type="text" value={this.props.post.title} onChange={this.handleChange} />
            <textarea value={this.props.post.body} htmlFor="body" name="body" onChange={this.handleChange} />
        </div>
        const postView = this.state.toggleUpdate
            ? updateView
            : this.state.toggleDelete ? deleteConfirmation : post
            
        return (
            <div>
                <PostContainer>
                <div>
                <button onClick={this.props.toggleSwitch}>All Posts</button>
                <button onClick={this.showUpdateForm}>{this.state.toggleUpdate ? 'Save' : 'Update Post' }</button>
                <button onClick={this.showDelete}>Delete Post</button>
                </div>
                {postView}
                </PostContainer>
            </div>
        );
    }
}

export default ShowPost;
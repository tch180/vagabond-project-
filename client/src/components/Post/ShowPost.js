import React, {Component} from 'react';
import styled from 'styled-components'


const PostContainer = styled.div `
    background: #984343;
    margin: 20px 150px;
    padding-top: 15px;
    box-shadow: 3px 3px 10px grey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
    h1 {
        margin: 0;
    }
    div {
        border: 2px solid white;
        width: 90%;
        text-align: center;
        margin: 10px;
        padding: 10px;
    }
    p {
        text-align: left;
    }
    
`

const UpdatePostContainer = styled.div `
margin: 40px 120px;
padding: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


input {
    margin: 10px 0px;
    font-size: 1.2em;
}

textarea {
    width: 45vw;
    height: 25vh;
    font-size: 1.2em;
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
            <div>
            <h1>{this.props.post.title}</h1>
            </div>
            <div>
            <img src={this.props.post.image} alt={this.props.post.title} />
            <p>{this.props.post.body}</p>
            </div>
        </PostContent>
        const updateView = <UpdatePostContainer>
            <input name="title" type="text" value={this.props.post.title} onChange={this.handleChange} />
            <input name="image" type="text" value={this.props.post.image} onChange={this.handleChange} />
            <input name="rating" type="number" className='rating' value={this.props.post.rating} onChange={this.handleChange} />
            <textarea value={this.props.post.body} htmlFor="body" name="body" onChange={this.handleChange} />
        </UpdatePostContainer>
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
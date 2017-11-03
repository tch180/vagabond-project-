import React, { Component } from 'react';
import styled from 'styled-components'


const PostContainer = styled.div`
    background: #984343;
    margin: 20px;
    padding: 15px;
    box-shadow: 3px 3px 10px #18121E;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 668px) {
        mrgin: 5px;
        padding: 5px;
}
`
const ButtonContainer = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
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
    @media only screen and (max-width: 668px) {
        flex-direction: column;
    }
`

const PostContent = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 65vw;
    font-size: 1.4em;
    img {
        width: 600px;
        height: 350px;
        margin-bottom: 10px;
        box-shadow: .5px .5px 2px #18121E;
    }
    h1 {
        margin: 0;
    } 
    @media only screen and (max-width: 668px) {
        img {
            width: 55vw;
            height: 25vh;
        }    
    }
`
const PostDiv = styled.div`
        border: 2px solid white;
        width: 110%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        padding: 20px;
        @media only screen and (max-width: 668px) {
            text-align: center;
            padding: 5px;
            margin: 5px;
        }
`

const BodyContainer = styled.div`
    width: 90%;
    border: none;
    background: rgba(24,18,30, .6);
    p {
        text-align: left;
        border: 3px solid #984343;
        margin: 10px;
        padding: 8px;
        letter-spacing: .05rem;
        h4 {
            text-align: center;
        }
    }
    @media only screen and (max-width: 668px) {
        padding: 3px;
        p{
            font-size: .7em;
        }
    }
`

const UpdatePostContainer = styled.div`
margin: 40px;
padding: 40px;
border: 2px solid white;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


input {
    margin: 10px 0px;
    font-size: 1.8em;
    background: #984343;
    box-shadow: 2px 2px 5px grey;
    color: white;
    border: 2px solid white;
    width: 85%;
    padding: 10px;
}

textarea {
    margin: 10px 0px;
    font-size: 1.8em;
    background: #984343;
    box-shadow: 2px 2px 5px grey;
    color: white;
    border: 2px solid white;
    width: 85%;
    height: 40vh;
    padding: 10px;
}
@media only screen and (max-width: 668px) {
       margin: 0px;
       padding: 2px;
       input, textarea {
        font-size: 1em;
       }       
    }
`

const DeleteConfirm = styled.div`
    width: 90%;
    h2 {
        text-align: center;
        border: 2px solid white;
        padding: 20px;
        font-size: 2.5em;
    }
    div {
        display: flex;
        justify-content: center;
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
    box-shadow: 0 2px 2px 0 rgba(24,18,30, .14),
    0 1px 5px 0 rgba(24,18,30, .12),
    0 3px 1px -2px rgba(24,18,30, .12);
    &:hover {
        background: rgb(198, 165, 103);
    }
    }
`


class ShowPost extends Component {
    state = {
        toggleUpdate: false,
        toggleDelete: false
    }

    showUpdateForm = (event) => {
        if (this.state.toggleUpdate == true) {
            this.handleSubmit(event)
        }
        this.setState({
            toggleUpdate: !this.state.toggleUpdate,
            toggleDelete: false
        })
    }

    handleChange = (event) => {
        this.props.handleUpdateChange(event)
    }
/* this shows the warning and confirmation for the delete */
    showDelete = () => {
        this.setState({
            toggleDelete: !this.state.toggleDelete
        })
    }

/* this deletes */
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
        /* when a user clicks delete it is brought to this prompt which will actually control whether or not the post will be deleted */
        const deleteConfirmation = <DeleteConfirm>
            <h2>Are you sure?</h2>
            <div>
                <button onClick={this.delete}>Yes</button>
                <button onClick={this.showDelete}>No</button>
            </div>
        </DeleteConfirm>
        /* post container that contains all information and is displayed as the view */
        const post = <PostContent>
            <PostDiv>
                <h1>{this.props.post.title}</h1>
            </PostDiv>
            <PostDiv>
                {this.props.post.image ? <img src={this.props.post.image} alt={this.props.post.title} /> : ''}
                <BodyContainer>
                    <p>
                        <h4>Rating: {this.props.post.rating}/10</h4>
                        {this.props.post.body}
                    </p>
                </BodyContainer>
            </PostDiv>
        </PostContent>
        // after the update button clicked this is viewed for the update view
        const updateView = <UpdatePostContainer>
            <input name="title" type="text" value={this.props.post.title} onChange={this.handleChange} />
            <input name="image" type="text" value={this.props.post.image} onChange={this.handleChange} />
            <input name="rating" type="number" className='rating' value={this.props.post.rating} onChange={this.handleChange} />
            <textarea value={this.props.post.body} htmlFor="body" name="body" onChange={this.handleChange} />
        </UpdatePostContainer>
        // sets the state for the view tertiary
        const postView = this.state.toggleUpdate
            ? updateView
            : this.state.toggleDelete ? deleteConfirmation : post

        return (
            <div>
                <PostContainer>
                    <ButtonContainer>
                        {/* these are what change the states to tertiary do swap the views on the page to the corresponding functions */}
                        <button onClick={this.props.toggleSwitch}>Posts</button>
                        <button onClick={this.showUpdateForm}>{this.state.toggleUpdate ? 'Save' : 'Update'}</button>
                        <button onClick={this.showDelete}>Delete</button>
                    </ButtonContainer>
                    {postView}
                    <ButtonContainer>
                        {/* same as above but at the bottom of the view */}
                        <button onClick={this.props.toggleSwitch}>Posts</button>
                        <button onClick={this.showUpdateForm}>{this.state.toggleUpdate ? 'Save' : 'Update'}</button>
                        <button onClick={this.showDelete}>Delete</button>
                    </ButtonContainer>
                </PostContainer>
            </div>
        );
    }
}

export default ShowPost;
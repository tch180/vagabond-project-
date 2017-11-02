import React, {Component} from 'react';

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

        const post = <div>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.body}</p>
        </div>
        const updateView = <div>
            <input name="title" type="text" value={this.props.post.title} onChange={this.handleChange} />
            <textarea value={this.props.post.body} htmlFor="body" name="body" onChange={this.handleChange} />
        </div>
        const postView = this.state.toggleUpdate
            ? updateView
            : this.state.toggleDelete ? deleteConfirmation : post
            
        return (
            <div>
                <button onClick={this.props.toggleSwitch}>All Posts</button>
                <button onClick={this.showUpdateForm}>{this.state.toggleUpdate ? 'Save' : 'Update Post' }</button>
                <button onClick={this.showDelete}>Delete Post</button>
                {postView}
            </div>
        );
    }
}

export default ShowPost;
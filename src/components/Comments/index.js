import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    comments: [],
    name: '',
    comment: '',
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    this.setState(prevState => {
      const {comments, name, comment} = prevState
      const i = Math.floor(Math.random() * 8)
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        bgColor: initialContainerBackgroundClassNames[i],
        like: false,
      }
      return {comments: [...comments, newComment]}
    })
  }

  onClickLike = id => {
    console.log('In comments')
    this.setState(prevState => ({
      comments: prevState.comments.map(each => {
        console.log(`${each.id}  ${id}`)
        if (id === each.id) {
          return {...each, like: !each.like}
        }
        return each
      }),
    }))
  }

  onClickDelete = id => {
    this.setState(prevState => ({
      comments: prevState.comments.filter(each => each.id !== id),
    }))
  }

  render() {
    const {name, comment, comments} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              onChange={this.onChangeName}
              className="name-input"
            />
            <textarea
              type="textarea"
              value={comment}
              onChange={this.onChangeComment}
              className="name-input"
            />
            <button type="submit" className="submit-btn">
              Add Comment
            </button>
          </form>
          <img
            className="image"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <ul className="comments-list">
          {comments.map(each => (
            <CommentItem
              item={each}
              onClickLike={this.onClickLike}
              onClickDelete={this.onClickDelete}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments

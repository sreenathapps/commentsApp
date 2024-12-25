import './index.css'

const CommentItem = props => {
  const {item, onClickDelete, onClickLike} = props
  const {name, comment, id, bgColor, like} = item
  const firstLetter = name.charAt(0)

  const handleDelete = () => {
    onClickDelete(id)
  }

  const handleLikeButton = () => {
    onClickLike(id)
  }

  const likeUrl = `https://assets.ccbp.in/frontend/react-js/comments-app/like${
    like ? 'd' : ''
  }-img.png`

  return (
    <li className="list-item">
      <div>
        <div className="li-container">
          <div className={`circle ${bgColor}`}>{firstLetter}</div>
          <div className="cont-1">
            <div className="time">
              <p className="head-1">{name}</p>
              <p className="time-label">Less than a minute ago</p>
            </div>
            <p className="comment-1">{comment}</p>
          </div>
        </div>
      </div>

      <div className="last-line">
        <div className="like">
          <img className="like-icon" alt="like" src={likeUrl} />
          <button
            type="button"
            onClick={handleLikeButton}
            className={`like-btn ${like ? 'liked' : ''}`}
          >
            Like
          </button>
        </div>
        <button type="button" onClick={handleDelete} className="delete-btn">
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          />
        </button>
      </div>
      <hr className="br" />
    </li>
  )
}

export default CommentItem

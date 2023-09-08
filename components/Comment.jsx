'use client'
const Comment = ({comment}) => {
  return (
    <div className="comments_list">
        <h3 className="text-blue-600">@{comment.username} :</h3>
        <p className="pl-2 border-b-2 pb-1">{comment.content}</p>
    </div>
  )
}

export default Comment
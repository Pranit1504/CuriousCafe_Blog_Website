import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from "next/navigation";

const PostCard = ({post,handleDelete,handleEdit,handleViewPostClick}) => {

  const router = useRouter();

  return (
    <div className="post_card"> 

      <div className="post_heading"> 
        <div>
          <h1>{post.title.length >12 ? `${post.title.substring(0,12)}...` : post.title}</h1>
          <button onClick={()=>{router.push(`/profile/${post.username}`)}} className="username mr-3">@{post.username}</button>
        </div>
        <button className="mr-3" onClick={() => {handleViewPostClick(post)}}><ArrowForwardIosIcon/></button>
      </div>

      <div className="profile_post_content">

        <p>{post.content.length > 130 ? `${post.content.substring(0,130)} ......`: post.content }</p>

        <div className="flex justify-between border-t-2 border-gray-300 pt-2">
          <button type="button" name="tag" onClick={() => {router.push(`/explore?tag=${post.tag}`)}}><h3>#{post.tag}</h3></button>
          <div className="flex gap-4">
          {
            handleDelete &&
            <>
              <button className="text-green-700 font-semibold" name="delete" onClick={() => {handleEdit && handleEdit(post)}} >Edit</button>
              <button className="text-red-500 font-semibold" name="edit" value={post} onClick={()=>handleDelete && handleDelete(post)}>Delete</button>
            </>

          }
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PostCard
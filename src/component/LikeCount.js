import { useState } from "react";

function LikeCount(props){
 const [like, setLike] = useState(props.like)
 function likeHandle(){
  setLike(like + 1);
 }
  return(
    <span onClick={likeHandle}>
      👍{like}
    </span>

  )
}

export default LikeCount;
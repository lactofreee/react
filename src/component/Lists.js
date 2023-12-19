/* eslint-disable */
import { useEffect, useState } from 'react';
import dummy from "../db/data.json"

//글 목록
function Lists(props){
  const [likes, setLikes] = useState(Array(props.topics.length).fill(0));
  function likeHandle(index) {
    setLikes(function (prevLikes) {
      const newLikes = [...prevLikes];
      newLikes[index]++;
      return newLikes;
    });
  }

  const lis = props.topics.map(function (t, index) {
    return (
    <div key={t.id}>
      <h3>
      <a href={'/read/'+t.id}>
        {t.title} <span onClick={(event) =>{event.preventDefault(); likeHandle(index)}}> 👍{likes[index]}</span>
      </a>
      </h3>
      <p>{props.topics[index].date}</p>
      <hr />
    </div>
    )
  })
 

    return(
    <div>
      {lis}
    </div>

    )
  }

  
  

export default Lists;
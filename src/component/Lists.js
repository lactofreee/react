/* eslint-disable */
import { useEffect, useState } from 'react';
import LikeCount from './LikeCount';
import { Link } from 'react-router-dom';

//글 목록
function Lists(){
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/contents')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setContents(data);
    })
  }, [])

  return(

  <div>
    <h3>{contents.map(content => (
      <ul key={content.id}>
        <Link to={`/article/${content.id}`}>{content.title}</Link>
        <LikeCount like={content.like} />
        <ul>
          {content.date}
        </ul>
        <hr />
      </ul>
    ))}</h3>
  </div>
)
}
  
  

export default Lists;
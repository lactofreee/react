import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article(){
  const id = useParams().id;
  console.log(id);

  const [contents, setContents] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:3003/contents?id=${id}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setContents(data);
    })
  }, [])

  return(
    <>
    {contents.map(content => (
      <div key={content.id}>
      <h1>{content.title}</h1>
      <h4>{content.body}</h4>
      <hr />
      </div>
    ))}
    </>

    )
}

export default Article;
import { useState, useEffect } from "react"

function App() {

  //impostare array vuoto per i post
  const [posts, setPosts] = useState([])
  
  //chiamata api con metodo fetch
  const fetchPosts = () => {
    fetch('http://localhost:3000/api/posts')
    .then( (res) => res.json() )
    .then( setPosts )
    .catch( err => console.error( err ))
  }

  useEffect( fetchPosts, [] )
  
  return (
    <>
      <div className="container">
        <div className="row">
          {posts.map((element) =>{
            return (
              <div className="col-3" key={element.id}>
                <div className="card">
                  {element.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App

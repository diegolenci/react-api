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
      
    </>
  )
}

export default App

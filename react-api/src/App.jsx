import axios from 'axios'
import { useState, useEffect } from "react"

function App() {
  
  const endpoint = 'http://localhost:3000/api/posts'
  //impostare array vuoto per i post
  const [posts, setPosts] = useState([]);
  
  //chiamata api con axios
  const fetchPosts = () => {
    axios
    .get(endpoint)
    .then((res) => setPosts(res.data))
    .catch( err => console.error( err ))
  };

  useEffect( fetchPosts, [] );
  
  return (
    <>
      <div className="container">
        <div>
          <table className='table table-primary'>
            <thead>
              <tr>
                <th scope='col'>id</th>
                <th scope='col'>title</th>
                <th scope='col'>image</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.title}</td>
                    <td>{elem.image}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App

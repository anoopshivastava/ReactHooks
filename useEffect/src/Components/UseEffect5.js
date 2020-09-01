import React, {useState , useEffect} from 'react';

import axios from 'axios'
function UseEffect5() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((res) => {
            setPosts(res.data)
         })
         .catch((error) => {
             console.log(error)
         })
  },[])
  return (
          <div className="App">
              <h1>Fatching Api</h1>
              <ul>
                    {
                      posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
              </ul>
           </div>
  );
}

export default UseEffect5;

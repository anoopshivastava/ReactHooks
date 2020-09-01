import React, {useState , useEffect} from 'react';

import axios from 'axios'
function UseEffect6() {
  const [posts, setPosts] = useState({});
   const [id, setid] = useState(1);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) => {
            setPosts(res.data)
         })
         .catch((error) => {
             console.log(error)
         })
  },[id])
  return (
          <div className="App">
              <h1>Fatching Api on Change</h1>
              <input type="text" value={id} onChange={e => setid(e.target.value)}/>
              
              <ul>
                   <li>
                      {posts.title}
                    </li>
              </ul>
           </div>
  );
}

export default UseEffect6;

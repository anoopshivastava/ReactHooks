import React, {useState , useEffect} from 'react';

import axios from 'axios'
function UseEffect7() {
  const [posts, setPosts] = useState({});
   const [id, setid] = useState(1);
   const [inputid, setInputId] = useState(1);
   const findData = () => {
      setInputId(id)
   }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) => {
            setPosts(res.data)
         })
         .catch((error) => {
             console.log(error)
         })
  },[inputid])
  return (
          <div className="App">
              <h1>Fatching Api on button click</h1>
              <input type="text" value={id} onChange={e => setid(e.target.value)}/>
              <button onClick={findData}>Click Here</button>
              <ul>
                   <li>
                      {posts.title}
                    </li>
              </ul>
           </div>
  );
}

export default UseEffect7;

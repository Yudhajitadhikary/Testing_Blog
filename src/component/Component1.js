
import React,{useState} from 'react';

function Component1(props) {
    const [authors, setAuthors] = useState([]);
    //    const [activeAuthor, setActiveAuthor] = useState(null);
         const [posts, setPosts] = useState([]);
         //     // Load authors on start
    React.useEffect(() => {
      setAuthors([{id:1,name:'Yudhajit Adhikary',post:'Blog'},{id:1,name:'Koyena Adhikary',post:'Blog1'}])
      setPosts([{id:1,name:'Yudhajit Adhikary',post:'Blog'},{id:1,name:'Koyena Adhikary',post:'Blog1'}])
     },[]);
  
   
      
    return (
              <div style={{display:'flex'}}>
              <div>{authors&&<div>{authors.map((author,index)=>(<div>{author.name}</div>))}</div>}</div>
              <div>{posts&&<div>{posts.map((post,index)=>(<div>{post.post}</div>))}</div>}</div>
              </div>
              
            );
    }
    export default Component1;      


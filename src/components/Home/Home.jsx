import React, {useEffect, useState} from 'react'
import './Home.css' 
import Axios from './../../api/server'
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import { selectUnstyledClasses } from '@mui/base';



const Home = () => { 
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");


 const onSearch = async (e) => {
  e.preventDefault();
  try{
    const res = await Axios.get("/api/v1/blogs/search/" + term);
    //setSelected("");
    if (res.data.data.length > 0){
      setBlogs(res.data.data);  
    } else {
      setTerm("");
    }

  }catch (err){
    console.log(err);
  }
 };


 useEffect(() => {
  const fetchBlogs = async () => {
    const res = await Axios.get("/api/v1/blogs");
    setBlogs(res.data.data);
    setLoading(false);

  };
  fetchBlogs();
}, []);
const mappedBlogs = blogs.map((blog, index) => {
  return (
    <Card 
    id={blog._id}
    key={index}
    title={blog.title}
    date={blog.date}
    //tag={blog.tag.name}
    name={blog.user.name}
    description={blog.description}
    />
  );
  
});

  return(
    <>
    <Navbar/>
    <div className='home_header'>
      <h3>
        Blog
      <h1>Publish your passions, your way</h1>

      <p>Create a unique and beautiful blog easily.</p>
      </h3>
            
      {/* <Header 
      //handleSelect={handleSelect}
      //selected={selected}
      term={term}
      setTerm={setTerm}
      onSearch={onSearch}
      /> */}
       <div className="blogs-wrapper">
        {loading ? <p>Loading</p> : mappedBlogs}
      </div>
      
      </div>
     
   
      </>
  );
};

export default Home;

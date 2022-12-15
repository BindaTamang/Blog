import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

import Axios from './../../api/server'
import {useParams, link} from "react-router-dom";
import "./Blog.css"
const Blog = () => {
    const [blog, setBlog] = useState(null);
    const [markdown, setMarkdown] = useState("");
    const {id} = useParams();
     
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await Axios.get("/api/v1/blogs/"+id);
            console.log(res.data.data)
            setBlog(res.data.data)
            // setMarkdown(markdown(res.data.data.sanitizedHTML));
        };
        fetchBlogs();
    }, [id]);
    return (
        <>
        <div className="blog">
            <Link to="/" className="link">
                <h3>Programming Blogs</h3>
            </Link>
            {blog ? (
                <>
                <h1>{blog.title}</h1>
                <p className="date">{blog.date}</p>
                {/* {blog.tag && <p className="tag">{blog.tag.name}</p>}*/}
                <div className="content">
                    {blog.content}
                    {/* <article dangerouslySetInnerHTML={{_html: markdown}}></article> */}
                </div>
                </>
               ) : (
                    <p>loading</p>
                )}                
                
                
        </div>
        </>
    );
};
export default Blog;
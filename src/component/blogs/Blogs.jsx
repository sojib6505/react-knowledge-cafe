import { useEffect, useState } from "react"
import Blog from "../blog/Blog"
export default function Blogs() {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
      
    const handleBlog = title =>{
       
    }
  return (
       <div className="w-2/3">
         {blogs.map((blog) => <Blog   blog={blog} handleBlog={handleBlog}></Blog>)}
       </div>
  )
}

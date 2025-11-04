import { useEffect, useState } from "react"
import Blog from "../blog/Blog"
export default function Blogs({handleBlog}) {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

  return (
       <div className="w-2/3">
         {blogs.map((blog,idx) => <Blog key={idx}  blog={blog} handleBlog={handleBlog}></Blog>)}
       </div>
  )
}

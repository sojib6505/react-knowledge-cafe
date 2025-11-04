import { useEffect, useState } from "react"
import Blog from "../blog/Blog"
export default function Blogs({handleBlog, handleRead}) {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

  return (
       <div className="md:w-2/3 mt-2">
         {blogs.map((blog,idx) => <Blog key={idx}  blog={blog} handleBlog={handleBlog} handleRead={handleRead}></Blog>)}
       </div>
  )
}

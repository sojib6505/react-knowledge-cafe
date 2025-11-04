
import './App.css'
import Blogs from './component/blogs/Blogs'
import Header from './component/header/Header'
import Bookmarks from './component/bookmark/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])

     const handleBlog = blog =>{
       const newBookmark = [...bookmarks, blog]
       setBookmarks(newBookmark)
    }
   
  return (
    <div className='container mx-auto'>
     <Header></Header>
     <div className='flex gap-10'>
       <Blogs handleBlog={handleBlog} ></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </div>
  )
}

export default App

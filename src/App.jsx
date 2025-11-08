
import './App.css'
import Blogs from './component/blogs/Blogs'
import Header from './component/header/Header'
import Bookmarks from './component/bookmark/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTimes, setReadingTimes] = useState(0)
     const handleBlog = blog =>{
       const newBookmark = [...bookmarks, blog]
       setBookmarks(newBookmark)
    }
   const handleRead = (title,time) =>{
     const newTime = readingTimes + time
     setReadingTimes(newTime)
     const remaining = bookmarks.filter(bookmark => title !== bookmark)
     setBookmarks(remaining)
   }
  return (
    <div className='container mx-auto'>
     <Header></Header>
     <div className='md:flex gap-10'>
      <Blogs handleBlog={handleBlog} handleRead={handleRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTimes={readingTimes}></Bookmarks>
     </div>
    </div>
  )
}

export default App

import { FaBookmark } from 'react-icons/fa';
export default function Blog({blog ,handleBlog}) {
  return (
        <div>
           <div className="mb-3">
              <img className="w-full max-h-96" src={blog.cover} alt="" />
              <div className="flex justify-between items-center">
                <div className="flex mt-2">
                    <img className="w-12 rounded-full" src={blog.author_img} alt="" />
                    <div className="ml-4">
                        <h3 className="text-xl font-bold">{blog.author}</h3>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{blog.reading_time} min read</p>
                   <button onClick={()=>handleBlog(blog.title)} > <FaBookmark className='text-gray-600'></FaBookmark></button>
                </div>
              </div>
           </div>
           <h2 className="text-3xl font-semibold">{blog.title} </h2>
           <div className="flex gap-2 mt-2 mb-2">
            {blog.hashtags.map(h => <p>{h}</p>)}
           </div>
        </div>
  )
}

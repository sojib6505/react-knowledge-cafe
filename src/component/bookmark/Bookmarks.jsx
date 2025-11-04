import Bookmark from "./Bookmark";

export default function Bookmarks({bookmarks,readingTimes}) {
  return (
    <div>
        <div className="p-2 bg-gray-300 mt-2 rounded-sm">
            <p className="text-sm font-bold text-center">Spent time on read : {readingTimes}  min</p>
        </div>
        {bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)}
    </div>
  )
}

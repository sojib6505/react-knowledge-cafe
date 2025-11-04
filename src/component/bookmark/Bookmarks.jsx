import Bookmark from "./Bookmark";

export default function Bookmarks({bookmarks}) {
  return (
    <div>
        {bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)}
    </div>
  )
}



export default function Bookmark({bookmark}) {
    console.log(bookmark)
  return (
    <div className="p-2 m-2 bg-gray-300 rounded-sm">
       <h3 className="text-gray font-bold">{bookmark}</h3>
    </div>
  )
}

import React, { useContext } from "react";
import BookmarkContext from "../store/BookMark-Context";
const BookMarkList = props => {
    const bookMarkctx = useContext(BookmarkContext)

    const bookMarkRemoveHandler = (id) => {
        bookMarkctx.removeBookmark(id)
    }
    const bookMarkEditHandler = (item) => {
        bookMarkctx.editBookmark(item)
        props.onClick()
    }
    console.log(bookMarkctx)
    return (
        < ul >
            {bookMarkctx.bookmark.map((item) => (

                <li key={item.id}>
                    {item.bookMarkTtitle} {">"} <a href={item.urlName} target="_blank">{item.urlName}</a>
                    <button onClick={bookMarkRemoveHandler.bind(null, item.id)}>Delete</button>
                    <button onClick={bookMarkEditHandler.bind(null, item)}>Edit</button>
                </li>

            )
            )}
        </ul >
    )
}

export default BookMarkList;

// import React, { useContext } from "react";
// import BookmarkContext from "../store/BookMark-Context";

// const BookMarkList = (props) => {
//     const bookMarkctx = useContext(BookmarkContext);

//     const bookMarkRemoveHandler = (id) => {
//         // Implement your remove logic here
//     }

//     const bookMarkEditHandler = (id) => {
//         // Implement your edit logic here
//     }

//     if (!bookMarkctx || !bookMarkctx.Bookmark) {
//         // Handle case where BookmarkContext is not providing the expected data
//         return <p>No bookmarks available</p>;
//     }
//     console.log(bookMarkctx)
//     return (
//         <ul>
//             {bookMarkctx.Bookmark.map((item) => (
//                 <li key={item.id}>
//                     {item.bookMarTtitle} {item.urlName}
//                     <button onClick={bookMarkRemoveHandler.bind(null, item.id)}>Delete</button>
//                     <button onClick={bookMarkEditHandler.bind(null, item.id)}>Edit</button>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default BookMarkList;

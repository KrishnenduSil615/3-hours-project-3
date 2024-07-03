import { useState, useContext } from "react";
import BookmarkContext from "./BookMark-Context";

const BookMarkProvider = (props) => {
    const [bookmark, setBookmark] = useState([]);
    const [bookmarkEditing, setbookmarkEditing] = useState(false);

    const addBookmarkHandler = (item) => {
        setBookmark((prevBookmark) => {
            return [...prevBookmark, item]});
        setbookmarkEditing(null)
    };

    const removeBookmarkHandler = (id) => {
        setBookmark((prevBookmark) => 
            prevBookmark.filter((item) => item.id !== id)
        );
    };

    const editBookmarkHandler = (item) => {
        setbookmarkEditing(item)
    };
   
    const updateBookmarkHandler = (item) => {
        setBookmark((prevBookmarks) => {
           return prevBookmarks.map((prevBookmark) => prevBookmark.id === item.id? item : prevBookmark)
    });
    console.log('bookmark')
        setbookmarkEditing(null)
    }

    const resetEditBookmarkHandler = () => {
        setbookmarkEditing(null)
    }

    const bookmarkContext = {
        bookmark: bookmark,
        addBookmark: addBookmarkHandler,
        editedBookmark: bookmarkEditing,
        editBookmark: editBookmarkHandler,
        removeBookmark: removeBookmarkHandler,
        updateBookmark: updateBookmarkHandler,
        resetEditBookmark: resetEditBookmarkHandler, 
    };

    return (
        <BookmarkContext.Provider value={bookmarkContext}>
            {props.children}
        </BookmarkContext.Provider>
    );
};


export default BookMarkProvider;
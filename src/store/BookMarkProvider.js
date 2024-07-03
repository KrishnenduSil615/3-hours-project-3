import { useState, useContext } from "react";
import BookmarkContext from "./BookMark-Context";

const BookMarkProvider = (props) => {
    const [bookmark, setBookmark] = useState([]);

    const addBookmarkHandler = (item) => {
        setBookmark((prevBookmark) => [...prevBookmark, item]);
    };

    const editBookmarkHandler = (id, updatedItem) => {
        setBookmark((prevBookmark) => 
            prevBookmark.map((item) => (item.id === id ? updatedItem : item))
        );
    };

    const removeBookmarkHandler = (id) => {
        setBookmark((prevBookmark) => 
            prevBookmark.filter((item) => item.id !== id)
        );
    };

    const bookmarkContext = {
        bookmark: bookmark,
        addBookmark: addBookmarkHandler,
        editBookmark: editBookmarkHandler,
        removeBookmark: removeBookmarkHandler
    };

    return (
        <BookmarkContext.Provider value={bookmarkContext}>
            {props.children}
        </BookmarkContext.Provider>
    );
};


export default BookMarkProvider;
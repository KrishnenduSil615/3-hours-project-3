import React from "react";

const BookmarkContext = React.createContext({
    bookmark: [],
    addBookmark: (item) => {},
    editBookmark: (id) => {},
    removeBookmark: (id) => {},
    editedBookmark: (id) => {},
    updateBookmark: (id) => {},
    resetEditBookmark: (id) => {},
})

export default BookmarkContext;
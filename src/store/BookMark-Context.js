import React from "react";

const BookmarkContext = React.createContext({
    bookmark: [],
    addBookmark: (item) => {},
    editBookmark: (id) => {},
    removeBookmark: (id) => {}
})

export default BookmarkContext;
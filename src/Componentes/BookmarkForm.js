import React, { useState, useContext, useEffect } from 'react'
import Modal from '../UI/Modul'
import BookmarkContext from '../store/BookMark-Context'


function BookmarkForm(props) {
    const bookMarkctx = useContext(BookmarkContext)

    const [bookMarkTtitle, setBookmarkTtitle] = useState('')
    const [urlName, setUrlName] = useState('')

    const bookMarTtitleChangeHandeler = (e) => {
        setBookmarkTtitle(e.target.value)
    }
    const urlNameChangeHandeler = (e) => {
        setUrlName(e.target.value)
    }

    useEffect(() => {
        if (bookMarkctx.editedBookmark) {
            setBookmarkTtitle(bookMarkctx.editedBookmark.bookMarkTtitle)
            setUrlName(bookMarkctx.editedBookmark.urlName)
        }
    }, [bookMarkctx.editedBookmark])

    const submitHandler = (e) => {
        e.preventDefault()
        if (bookMarkctx.editedBookmark) {
            bookMarkctx.updateBookmark({id: bookMarkctx.editedBookmark.id, bookMarkTtitle, urlName} )
        } else {
            bookMarkctx.addBookmark({ id: Math.random().toString(), bookMarkTtitle, urlName })
        }
        // bookMarkctx.addBookmark({ id: Math.random().toString(), bookMarkTtitle, urlName })
        props.onHideBookMark()
    }


    return (
        <Modal onHideBookMark={props.onHideBookMark}>
            <form onSubmit={submitHandler}>
                <label htmlFor='bookmarktitle'>
                    Bookmark Title:
                    <input id='bookmarktitle' type="text" name="title" value={bookMarkTtitle} onChange={bookMarTtitleChangeHandeler} required />
                </label>
                <br />
                <label htmlFor='url'>
                    URL:
                    <input id='url' type="url" name="url" value={urlName} onChange={urlNameChangeHandeler} required />
                </label>
                <br />
                <button type='submit'>add</button>
                <button onClick={props.onHideBookMark}>close</button>
            </form>
        </Modal>
    )
}

export default BookmarkForm


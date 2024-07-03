import React, { useState, useContext } from 'react'
import Modal from '../UI/Modul'
import BookmarkContext from '../store/BookMark-Context'


function BookmarkForm(props) {
    const bookMarkctx = useContext(BookmarkContext)

    const [bookMarkTtitle, setBookmarksMarTtitle] = useState('')
    const [urlName, setUrlName] = useState('')

    const bookMarTtitleChangeHandeler = (e) => {
        setBookmarksMarTtitle(e.target.value)
    }
    const urlNameChangeHandeler = (e) => {
        setUrlName(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        bookMarkctx.addBookmark({id: Math.random().toString(), bookMarkTtitle, urlName})
        props.onHideBookMark()
    }


    return (
        <Modal onHideBookMark={props.onHideBookMark}>
            <form onSubmit={submitHandler}>
                <label htmlFor='bookmarktitle'>
                    Bookmark Title:
                    <input id='bookmarktitle' type="text" name="title" value={bookMarkTtitle} onChange={bookMarTtitleChangeHandeler} />
                </label>
                <br />
                <label htmlFor='url'>
                    URL:
                    <input id='url' type="url" name="url" value={urlName} onChange={urlNameChangeHandeler} />
                </label>
                <br />
                <button type='submit'>add</button>
                <button onClick={props.onHideBookMark}>close</button>
            </form>
        </Modal>
    )
}

export default BookmarkForm


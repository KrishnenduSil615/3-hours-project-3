import React,{useState} from 'react';
import './App.css';
import BookmarkForm from './Componentes/BookmarkForm';
import BookMarkProvider from './store/BookMarkProvider';
import BookMarkList from './Componentes/BookmarkList';
function App() {
  const [fromIsShown, setFormIsShown] = useState(false)
  
  const showBookMarkHandler = () => {
    setFormIsShown(true)
  }
  const hideBookMarkHandler = () => {
    setFormIsShown(false)
  }
  
  return (
    <BookMarkProvider>
      <div style={{ textAlign: 'center' }}>
        <h1>Bookmark Website</h1>
        <button onClick={showBookMarkHandler}>ADD NEW</button>
        {fromIsShown && <BookmarkForm onHideBookMark={hideBookMarkHandler}/>}
      </div>
      <h1>All Bookmark</h1>
      <BookMarkList  onClick={showBookMarkHandler}/>
    </BookMarkProvider>
  );
}

export default App;

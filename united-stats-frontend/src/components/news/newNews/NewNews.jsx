import React, {useState} from 'react'
import '../news.css'

const NewNews = (props) => {

  const [showInputs, setShowInput] = useState(false);

  const toggleInputs = () => {
    setShowInput(!showInputs);
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [state, setState] = useState('Neutral');

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  }

  const changeContentHandler = (event) => {
    const value = event.target.value;
    setContent(value);
  }

  const changeAuthorHandler = (event) => {
    const value = event.target.value;
    setAuthor(value); 
  }

  const changeStateHandler = (event) => {
    const value = event.target.value;
    setState(value);
  }

  const addNews = () => {
    const newNews = {
      title: title,
      content: content,
      author: author,
      state: state,
      date: '03-02-2022',
    };
    
    props.onAdd(newNews);

    setTitle('');
    setContent('');
    setAuthor('');
    setState('');

    setShowInput(false);
  }

  return (
    <>

      {!showInputs && (<div><button className='bg-green-500 hover:bg-green-700 text-white font-bold text-xs py-2 px-4 mt-5 rounded' onClick={toggleInputs}>Dodaj News</button></div>)}

      {showInputs && (<div className='news border-gray-600'>
      <label className='labelNews'>Tytuł:</label>
      <input type="text"
             className='inputNews'
             value={title}
             onChange={changeTitleHandler}/>

      <label className='labelNews mt-5'>Treść:</label>
      <input type="text"
             className='inputNews'
             value={content}
             onChange={changeContentHandler}/>

      <label className='labelNews mt-5'>Autor:</label>
      <input type="text"
             className='inputNews'
             value={author}
             onChange={changeAuthorHandler}/>

      <label className='labelNews mt-5'>Stan:</label>
      <select className='selectNews'
              value={state}
              onChange={changeStateHandler}>
          <option>Neutral</option>
          <option>Positive</option>
          <option>Negative</option>
        </select>

      <button className='bg-green-500 hover:bg-green-700 text-white font-bold text-xs py-2 px-4 mt-5 rounded '
              onClick={() => addNews()}>Dodaj News!</button>
      </div>)}
      
    </>
  )
}

export default NewNews
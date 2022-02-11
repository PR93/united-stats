import React, {useState} from 'react'

const EditNews = () => {

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

  const editNews = () => {
      //
  }

  return (
    <div className='news border-gray-600'>
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

      <button className='bg-green-500 hover:bg-orange-700 text-white font-bold text-xs py-2 px-4 mt-5 rounded '
              onClick={() => editNews()}>Edytuj</button>
      </div>
  )
}

export default EditNews
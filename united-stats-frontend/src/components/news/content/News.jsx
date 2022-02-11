import React, {useState} from 'react'
import '../news.css'

const News = (props) => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    }

    let borderColor

    if(props.state === 'positive')
    {
        borderColor = 'border-green-600'
    }
    else if(props.state === 'negative')
    {
        borderColor = 'border-red-600'
    }
    else
    {
        borderColor = 'border-gray-600'
    }

    const editHandler = () => {
        props.onEdit({
            title: props.title,
            content: props.content,
            author: props.author,
            state: props.state
        });
    }

  return (
    <div className={'news ' + borderColor}>

        <h2 className='font-bold text-lg cursor-pointer'
            onClick={toggleContent}>{props.title}</h2>

        <p className='text-xs text-united-graphite-300 mb-5  cursor-pointer'
           onClick={toggleContent}>Napisany przez: {props.author}, {props.date}</p>

        {showContent && (<div className='mb-5'>{props.content}</div>)}

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 mr-3 rounded'
        onClick={editHandler}>Edytuj</button>

        <button className='bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-2 px-4 rounded'
        onClick={() => {props.onDelete(props.id)}}>Usuń</button>
    </div>
  )
}

export default News
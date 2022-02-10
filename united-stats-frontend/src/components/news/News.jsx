import React from 'react'

class News extends React.Component {
    render(){

        const news = [
            {
                id: '1',
                title: 'Przegrana z Chelsea!',
                content: 'Man United przegrało na wyjeździe z ChelseaFC!',
                author: 'PR',
                date: '02-02-2022',
                state: 'negative'
            },
            {
                id: '2',
                title: 'Wygrana z Man City!',
                content: 'Man United wygrało u siebie z Man City!',
                author: 'PR',
                date: '02-02-2022',
                state: 'positive'
            },
            {
                id: '3',
                title: 'Nowa odsłona www!',
                content: 'Witamy na nowym serwisie WeAreUnited! Mamy nadzieje, że nowa szata graficzna spełnia Wasze oczekiwania.',
                author: 'PR',
                date: '02-02-2022',
                state: 'null'
            }
        ];

        return(
        <div className='flex flex-col h-screen text-center items-center pt-10 font-mono'>
            <div>    
                <h1 className='text-2xl text-united-graphite-500'>Aktualności:</h1>
            </div>

            {news.map(news => {

                let borderColor

                if(news.state === 'positive')
                {
                    borderColor = 'border-green-600'
                }
                else if(news.state === 'negative')
                {
                    borderColor = 'border-red-600'
                }
                else
                {
                    borderColor = 'border-gray-600'
                }

                return(
                <div className={'mt-10 text-left w-3/4 p-4 rounded bg-gray-200 border ' + borderColor}>

                    <h2 className='font-bold text-lg'>{news.title}</h2>

                    <p className='text-xs text-united-graphite-300 mb-5'>Napisany przez: {news.author}, {news.date}</p>

                    <div className='mb-5'>{news.content}</div>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 mr-3 rounded'>Edytuj</button>

                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-2 px-4 rounded'>Usuń</button>
                </div>
                )
            })}


        </div>
        )
    };
};

export default News
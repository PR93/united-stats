import React from 'react'
import NewsContent from './content/News'
import NewNews from './newNews/NewNews';
import Modal from 'react-modal'; // dodatkowa biblioteka react-modal
import EditNews from './editNews/EditNews';

class News extends React.Component {
    constructor(props){
        super(props); // to jest specjalna funkcja reacta należąca do constructora

        this.state = {
            news: [
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
                },
                {
                    id: '4',
                    title: 'Kocham Pysie!',
                    content: 'Kocham Pysie bardzo.',
                    author: 'PR',
                    date: '03-02-2022',
                    state: 'null'
                }
            ],
            showEditModal: false
        }; // to jest specjalne pole, które aktualizuje tablice w czasie rzeczywistym

    };

    deleteNote(id){
        const news = [...this.state.news].filter(news => news.id !== id);
        this.setState({news: news}); // setState to tez specjalna funkcja reacta, która mowi jaka wartosc chce zmienic i odswiezyc w czasie rzeczywistym
    };

    addNews(news){
        const newNews = [...this.state.news];
        newNews.push(news);
        this.setState({ news: newNews });
    };

    editNote(news){
        const newNews = [...this.state.news];
        const indexNews = newNews.findIndex(item => item.id == news.id);
        if(indexNews >= 0){
            newNews[indexNews] = news;
            this.setState({ news: newNews });
        }
    };

    toggleModal(){
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler(){
        this.toggleModal();
        //
    }


    render(){

        return(
        <div className='flex flex-col h-screen text-center items-center pt-10 font-mono'>
            <div>    
                <h1 className='text-2xl text-united-graphite-500'>Aktualności:</h1>
            </div>

            <NewNews onAdd={(news) => this.addNews(news)} />

            <Modal isOpen={this.state.showEditModal}
                   contentLabel="Edytuj news:">
                       <EditNews onEdit={news => this.editNote(news)} />
                       <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold text-xs py-2 px-4 mt-5 rounded'></button>
            </Modal>

            {this.state.news.map(news => {
                return(
                    <NewsContent key={news.id}
                        {...news} 
                        onDelete={() => this.deleteNote(news.id)}
                        onEdit={() => this.editNoteHandler(news)}/>
                )
            })}


        </div>
        )
    };
};

export default News
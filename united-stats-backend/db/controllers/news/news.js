const News = require('../../models/news');

 class NewsController  {

    async getAllNews(req, res){
        let news;
        try{
            news =  await News.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
        res.status(200).json(news);
    }

    async getNews(req, res){
        const id = req.params.id;

        let news;
        try{
            news =  await News.findOne({ _id: id });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
        res.status(200).json(news);
    }

    async addNews(req, res) {

        let newNews;

        try {
            newNews = new News({
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                state: req.body.state
            });

            await newNews.save();

        } catch(err)
        {
            return res.status(422).json({message: err.message});
        }

        res.status(201).json(newNews);

    }

    async editNews(req, res){

        let updatedNews;

        try{
            updatedNews = await News.findOne({
                _id: req.params.id
            });

            updatedNews.title = req.body.title;
            updatedNews.content = req.body.content;
            updatedNews.author = req.body.author;
            updatedNews.date = Date.now();
            updatedNews.state = req.body.state;

            await updatedNews.save();

        } catch(err)
        {
            return res.status(422).json({message: err.message});
        }

        res.status(201).json(updatedNews);
    }

    async deleteNews(req, res){
        const id = req.params.id;

        let news;
        try{
            news =  await News.deleteOne({ _id: id });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
        res.sendStatus(204);
    }
}

module.exports = new NewsController();
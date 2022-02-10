const News = require('../../models/news');

 class NewsController  {
    async addNews(req, res) {

        //const title = req.body.title;
        const content = req.body.content;
        const author = req.body.author;

        // const newNews = new News({
        //     title: title,
        //     content: content,
        //     date: Date.now(),
        //     author: author
        // });
            
        // await newNews.save().then(() => {
        //     res.status(200).json(newNews);
        // });

        res.send("OK");
    }

    async getAllNews(req, res){
        let doc;
        try{
            doc =  await News.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
        res.status(200).json(doc);
    }

    async getNews(req, res){
        const id = req.params.id;

        let doc;
        try{
            doc =  await News.findOne({ _id: id });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
        res.status(200).json(doc);
    }

    editNews(req, res){
        res.send('OK');
    }

    deleteNews(req, res){
        res.send('OK');
    }
}

module.exports = new NewsController();
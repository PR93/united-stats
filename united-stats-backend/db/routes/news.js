const express = require('express');
const router = express.Router();

const newsActions = require('../controllers/news/news');

router.get('/news', newsActions.getAllNews);
router.get('/news/:id', newsActions.getNews);
router.post('/news', newsActions.addNews);
router.put('/news/:id', newsActions.editNews);
router.delete('/news/:id', newsActions.deleteNews);

module.exports = router;
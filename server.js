const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/djdashboard', { useNewUrlParser: true });

const Events = require('../models/article');

router.get('/', (req, res, next) => {
  res.json();
});

router.get('/articles', (req, res, next) => {
  Events.find({})
    .then((events) => {
      res.render('index', events);
    })
    .catch((err) => res.render('error', err));
});
// router.post('/addcomment/:id', (req, res, next) => {
//   Article.findByIdAndUpdate(
//     req.params.id,
//     {
//       $push: { comments: req.body.comment },
//     },
//     (err, data) => {
//       if (err)
//         return res.status(401).json({ message: 'failed to add comment' });
//       res.json({ message: 'Comment added succesfully', data });
//     },
//   );
// });
module.exports = router;

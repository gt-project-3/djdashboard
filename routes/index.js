const router = require('express').Router();
const controllers = require('../controllers');

// Matches with "/api/books"
console.log(controllers.Event);
router
  .route('/')
  .get(controllers.Event.findAll)
  .post(controllers.Event.create);

router
  .route('/event')
  .get(controllers.Event.findAll)
  .post(controllers.Event.create);
router
.route('/user')
.post(controllers.User.create);

router
.route('/user/:id')
.get(controllers.User.findById)
.delete(controllers.User.remove)
.put(controllers.User.update);

router
  .route('/songs')
  .get(controllers.Dj.findById)
  .post(controllers.User.create)
  .delete(controllers.User.remove);
router
  .route('/event/:id')
  .get(controllers.Event.findById)
  .post(controllers.Event.create)
  .put(controllers.Event.update)
  .delete(controllers.Event.remove);
module.exports = router;

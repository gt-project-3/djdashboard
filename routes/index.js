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
  .post(controllers.Event.create)
  .delete(controllers.Event.remove);
router
  .route('/user')
  .get(controllers.User.findById)
  .post(controllers.User.create)
  .delete(controllers.User.remove);

module.exports = router;

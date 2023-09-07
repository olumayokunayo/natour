const express = require('express');

const tourController = require('./../controllers/tourController');
const router = express.Router();

// router.param('id', tourController.checkID);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createStore);
router
  .route('/:id')
  .patch(tourController.updateStore)
  .delete(tourController.deleteStore)
  .get(tourController.getTour);

module.exports = router;

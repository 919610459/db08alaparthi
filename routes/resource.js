var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dog_controller = require('../controllers/dog');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// dog ROUTES ///
// POST request for creating a dog.
router.post('/resource/dog', dog_controller.dog_create_post);
// DELETE request to delete dog.
router.delete('/resource/dog/:id', dog_controller.dog_delete);
// PUT request to update dog.
router.put('/resource/dog/:id', dog_controller.dog_update_put);
// GET request for one dog.
router.get('/resource/dog/:id', dog_controller.dog_detail);
// GET request for list of all dog items.
router.get('/resource/dog', dog_controller.dog_list);
module.exports = router;
let express = require('express'),
  router = express.Router(),
controller = require('../../controllers/api/steam');

router.get('/user-info', controller.userInfo);

router.get('/get-user-apps', controller.getUserApps);

router.get('/get-app-details', controller.getAppDetails);

module.exports = router;

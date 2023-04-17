const express = require('express');
const router  = express.Router();
const recruiterController = require('../controller/recruiters');
const {validateSeller} = require('../middleware/common');
const {protect} = require('../middleware/Auth');
const upload = require('../middleware/Multer');


router.get("/", recruiterController.getAllRecruiter);
router.get("/:id", recruiterController.getDetailRecruiter);
router.put("/:id", validateSeller, upload, recruiterController.updateRecruiter);
router.delete("/:id", protect, recruiterController.deleteRecruiter);

// Authenticated

router.post('/register', validateSeller, recruiterController.registerRecruiter);
router.post('/login', recruiterController.loginRecruiter);
router.post('/refreshtoken', recruiterController.refreshToken);
router.get('/get/profile', protect, recruiterController.profileRecruiter);


module.exports = router;
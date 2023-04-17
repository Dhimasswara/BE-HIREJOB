const express = require('express');
const router  = express.Router();
const skillsController = require('../controller/skills');
const {validateSeller} = require('../middleware/common');
const {protect} = require('../middleware/Auth');


router.get("/", skillsController.getAllSkills);
router.get("/worker/:id", skillsController.getSkillUser)
router.get("/detail/:id", skillsController.getDetailSkills);
router.post('/addskills/:id', skillsController.inputSkills);
router.delete("/delete/:id", protect, skillsController.deleteSkills);
router.put("/update/:id", protect, validateSeller, skillsController.updateSkills);




// router.get("/:id", workerController.getDetailSkills);
// router.put("/:id", validateSeller, workerController.updateSkills);
// router.delete("/:id", protect, workerController.deleteSkills);

// Authenticated

// router.post('/register', validateSeller, workerController.registerSkills);
// router.post('/login', workerController.loginSkills);
// router.post('/refreshtoken', workerController.refresSkills);
// router.get('/profile', protect, workerController.profileSkills);


module.exports = router;
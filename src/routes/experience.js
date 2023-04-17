const express = require('express');
const router  = express.Router();
const experienceController = require('../controller/experience');
const {validateSeller} = require('../middleware/common');
const {protect} = require('../middleware/Auth');
const upload = require('../middleware/Multer');


router.get("/", experienceController.getAllExperience);
router.get("/worker/:id", experienceController.getExperienceUser)
router.get("/detail/:id", experienceController.getDetailExperience);
router.post('/add/:id', upload ,validateSeller, experienceController.inputExperience);
router.delete("/delete/:id", protect, experienceController.deleteExperience);
router.put("/update/:id", protect, validateSeller, experienceController.updateExperience);

module.exports = router;
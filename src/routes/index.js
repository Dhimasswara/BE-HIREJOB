
const express = require('express')
const router = express.Router()
const recruiterRoutes = require('../routes/recruiter')
const skillRoutes = require('../routes/skill')
const workerRoutes = require('../routes/worker')
const portfolioRoutes = require('../routes/portfolio')
const experienceRoutes = require('../routes/experience')

router.use('/recruiters', recruiterRoutes)
router.use('/workers', workerRoutes)
router.use('/skills', skillRoutes)
router.use('/portfolio', portfolioRoutes)
router.use('/experience', experienceRoutes)






// 

module.exports = router;
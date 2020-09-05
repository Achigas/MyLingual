const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js')
 

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)


router.use(function (req, res, next) {
  res.locals.session = req.session;
  console.log("ITS WORKINGGGGGGGG")
  console.log(" ---------------- ")
  console.log("-----------------")
  next();
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router; 

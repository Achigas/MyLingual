const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const meetRoutes = require('./meet-routes.js');
const exploreRoutes = require('./explore-routes.js');
 

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/meet-people', meetRoutes);
router.use('/explore', exploreRoutes);


router.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router; 

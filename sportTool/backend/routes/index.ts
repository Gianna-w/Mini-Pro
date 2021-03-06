const { Router } = require('express')
const UserController = require('../controllers/login')
const WeRunController = require('../controllers/weRun')

const router = Router()
router.route('/').get((req:any, res:any) => {
  res.send('122333')
})
router.route('/loginInfo').get(UserController.loginInfo)
router.route('/weRunInfo').get(WeRunController.weRunInfo)

module.exports = router

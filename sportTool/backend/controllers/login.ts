const request = require('request')
const { APP_ID, APP_SECRET } = require('../utils/global-vars')

class UserController {
  static loginInfo = async (req:any, res:any) => {
    const jsCode = req.query.code
    const requestPath = `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${jsCode}&grant_type=authorization_code`
    // eslint-disable-next-line node/handle-callback-err
    request(requestPath, (err:any, wxRes:any, wxBody:any) => {
      res.send(wxBody)
    })
  }
}
module.exports = UserController
// 这一行是为了消除ts报错：不同文件的类名重复
export {}

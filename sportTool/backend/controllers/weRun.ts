const WXBizDataCrypt = require('../utils/WXBizDataCrypt')
const { APP_ID } = require('../utils/global-vars')

class WeRunController {
  static weRunInfo = async (req:any, res:any) => {
    const { encryptedData, iv, sessionKey } = req.query
    const pc = new WXBizDataCrypt(APP_ID, sessionKey)
    const decryptedData = pc.decryptData(encryptedData, iv)
    res.send(decryptedData)
  }
}
module.exports = WeRunController
// 这一行是为了消除ts报错：不同文件的类名重复
export {}

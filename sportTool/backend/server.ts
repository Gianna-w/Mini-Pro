const app = require('./app')
const getIpAddress = require('./utils/get-ip')
const port = '30001'
// http://192.168.1.6:30001/   IP地址会变化

app.listen(port, () => {
  const ipAddress = getIpAddress()
  console.log(`app listening at http://${ipAddress}:${port}`)
})

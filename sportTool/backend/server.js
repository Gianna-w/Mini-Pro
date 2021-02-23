"use strict";
const app = require('./app');
const getIpAddress = require('./utils/get-ip');
const port = '30001';
app.listen(port, () => {
    const ipAddress = getIpAddress();
    console.log(`app listening at http://${ipAddress}:${port}`);
});
//# sourceMappingURL=server.js.map
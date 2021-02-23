"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const WXBizDataCrypt = require('../utils/WXBizDataCrypt');
const { APP_ID } = require('../utils/global-vars');
class WeRunController {
}
WeRunController.weRunInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { encryptedData, iv, sessionKey } = req.query;
    const pc = new WXBizDataCrypt(APP_ID, sessionKey);
    const decryptedData = pc.decryptData(encryptedData, iv);
    res.send(decryptedData);
});
module.exports = WeRunController;
//# sourceMappingURL=weRun.js.map
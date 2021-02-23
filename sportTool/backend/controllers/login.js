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
const request = require('request');
const { APP_ID, APP_SECRET } = require('../utils/global-vars');
class UserController {
}
UserController.loginInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jsCode = req.query.code;
    const requestPath = `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${jsCode}&grant_type=authorization_code`;
    request(requestPath, (err, wxRes, wxBody) => {
        res.send(wxBody);
    });
});
module.exports = UserController;
//# sourceMappingURL=login.js.map
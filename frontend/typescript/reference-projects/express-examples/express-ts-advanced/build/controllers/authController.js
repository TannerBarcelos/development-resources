"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = exports.AuthController = void 0;
var types_1 = require("../utils/ts/types");
var authCheck_1 = require("../middlewares/authCheck");
var decorators_1 = require("../utils/ts/decorators");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.getLogin = function (request, response) {
        response.send("\n      <form method=\"POST\">\n          <h1>Welcome to the TS + Express sample tutorial App!</h1>\n          <div>\n              <label>Email</label>\n              <input name=\"email\" />\n          </div>\n          <div>\n              <label>Password</label>\n              <input name=\"password\" type=\"password\"/>\n          </div>\n          <button>Login</button>\n      </form>\n    ");
    };
    AuthController.prototype.login = function (request, response) {
        var _a = request.body, email = _a.email, password = _a.password;
        // No need to check if email and password exist in body = we now have a body validator middleware custom made to handle any body params needed
        if (email === 'test@test.com' && password === 'password') {
            request.session.user = { email: email, password: password };
            response.json({ email: email, password: password, message: 'Logged in' });
        }
        else {
            response.json({ message: 'Credentials are not valid or do not exist' });
        }
    };
    AuthController.prototype.logout = function (request, response) {
        request.session.destroy(function (err) {
            console.log('Session destroyed');
            response.redirect('/auth/login');
            if (err) {
                console.error(err);
            }
        });
    };
    AuthController.prototype.credentials = function (request, response) {
        var user = request.session.user;
        response.send("\n          <div>\n              <h1>Hello there!</h1>\n              <p>email: ".concat(user === null || user === void 0 ? void 0 : user.email, "<p>\n          </div>\n      "));
    };
    __decorate([
        (0, decorators_1.route)('/login', types_1.HTTP_METHOD.GET),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "getLogin", null);
    __decorate([
        (0, decorators_1.route)('/login', types_1.HTTP_METHOD.POST),
        (0, decorators_1.bodyValidator)('email', 'password') // validates if request body contains email and password
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "login", null);
    __decorate([
        (0, decorators_1.route)('/logout', types_1.HTTP_METHOD.GET),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "logout", null);
    __decorate([
        (0, decorators_1.route)('/credentials', types_1.HTTP_METHOD.GET),
        (0, decorators_1.use)(authCheck_1.requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "credentials", null);
    AuthController = __decorate([
        (0, decorators_1.controller)('/auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
var isLoggedIn = function (request, response) {
    var _a;
    if ((_a = request === null || request === void 0 ? void 0 : request.session) === null || _a === void 0 ? void 0 : _a.user) {
        response.send("\n        <div>\n            <h3>You are logged in</h3>\n            <a href=\"/auth/logout\">Logout</a>\n        </div>\n    ");
    }
    else {
        response.send("\n        <div>\n            <h3>Not authorized</h3>\n            <a href=\"/auth/login\">Login</a>\n        </div>\n    ");
    }
};
exports.isLoggedIn = isLoggedIn;

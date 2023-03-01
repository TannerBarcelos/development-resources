"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserCredentials = exports.logout = exports.login = exports.createLogin = exports.isLoggedIn = void 0;
const isLoggedIn = (request, response) => {
    var _a;
    if ((_a = request === null || request === void 0 ? void 0 : request.session) === null || _a === void 0 ? void 0 : _a.user) {
        response.send(`
        <div>
            <h3>You are logged in</h3>
            <a href="/auth/logout">Logout</a>
        </div>
    `);
    }
    else {
        response.send(`
        <div>
            <h3>Not authorized</h3>
            <a href="/auth/login">Login</a>
        </div>
    `);
    }
};
exports.isLoggedIn = isLoggedIn;
const createLogin = (request, response) => {
    response.send(`
    <form method="POST">
        <h1>Welcome to the TS + Express sample tutorial App!</h1>
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"/>
        </div>
        <button>Login</button>
    </form>
  `);
};
exports.createLogin = createLogin;
const login = (request, response) => {
    const { email, password } = request.body;
    if (email &&
        password &&
        email === 'test@test.com' &&
        password === 'password') {
        request.session.user = { email, password };
        response.json({ email, password, message: 'Logged in' });
    }
    else {
        response.json({ message: 'Credentials are not valid or do not exist' });
    }
};
exports.login = login;
const logout = (request, response) => {
    request.session.destroy((err) => {
        console.log('Session destroyed');
        response.redirect('/auth/login');
        if (err) {
            console.error(err);
        }
    });
};
exports.logout = logout;
const getUserCredentials = (request, response) => {
    const { user } = request.session;
    response.send(`
        <div>
            <h1>Hello there!</h1>
            <p>email: ${user === null || user === void 0 ? void 0 : user.email}<p>
        </div>
    `);
};
exports.getUserCredentials = getUserCredentials;

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        ['/api', '/auth/google'],
        createProxyMiddleware({
            target: 'http://localhost:5000',
        })
    );
};

//Ide na route /auth/google targetuje i localhost. Pa to bude ruta http://localhost:5000/auth/google
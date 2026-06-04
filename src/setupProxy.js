const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:10000',
      changeOrigin: true,
      onError: (err, req, res) => {
        // 콘솔 에러 억제
        res.status(503).json({ error: 'Server unavailable' });
      },
    })
  );
};
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import accountRoutes from './routes/accountrouter.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Account Manager Website</h1>');
});

// Proxy middleware to handle dynamic targets
app.use('/proxy', (req, res, next) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send('Missing target URL');
  }

  const proxy = createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
    onError: (err, req, res) => {
      console.error('Proxy error:', err);
      res.status(500).send('Proxy error');
    },
    onProxyRes: (proxyRes) => {
      // Attempt to handle X-Frame-Options
      proxyRes.headers['X-Frame-Options'] = 'ALLOWALL';  // This might not always work
    }
  });

  proxy(req, res, next);
});

app.use('/api/accounts', accountRoutes);

const port = process.env.PORT || 5500;
app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

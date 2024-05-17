// this file is for testing purposes in local development go to api/index.ts for production code
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] ${req.method} ${req.url} ${req.get(
      "User-Agent"
    )}`
  );
  next();
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://vercel-proxy-server-fawn.vercel.app",
    changeOrigin: true,
  })
);

app.listen(PORT);

export default app;

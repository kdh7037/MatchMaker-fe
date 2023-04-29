// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
const NODE_ENV = process.env.NODE_ENV || 'development';
const API_HOST = process.env.API_HOST || 'http://localhost';
const {parsed: parsedEnv} = dotenv.config({path: `env/${NODE_ENV}.env`});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: parsedEnv,
  images: {
    domains: [],
  },
  pageExtensions: ['page.tsx'],
  reactStrictMode: true,
  rewrites: async () => {
    return [{
      source: '/api/:slug',
      destination: `${API_HOST}/:slug`,
    }];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  poweredByHeader: false,
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin-allow-popups',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: 'https://vercel.com/',
        },
        {
          key: 'Cross-Origin-Embedder-Policy',
          value: 'require-corp',
        },
        {
          key: 'Cross-Origin-Resource-Policy',
          value: 'same-site',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ],
    }
  ]
};

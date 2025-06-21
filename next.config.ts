/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.gstatic.com;
              img-src 'self' https://image.tmdb.org data:;
              style-src 'self' 'unsafe-inline';
              font-src 'self' fonts.googleapis.com fonts.gstatic.com;
              frame-src https://www.youtube.com https://player.vimeo.com;
              media-src https://www.youtube.com https://player.vimeo.com;
              connect-src 'self' https://api.themoviedb.org;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), microphone=(), camera=(), fullscreen=*, autoplay=*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

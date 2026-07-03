/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `next build` emits a fully static site into `out/`,
  // which is uploaded to All-Inkl via FTP (Apache/PHP shared hosting, no Node
  // server). Every route is pre-rendered to HTML, so all SEO is preserved.
  output: "export",
  // Emit `out/team/index.html` etc. so Apache serves clean URLs (/team/) with
  // no .htaccess rewrites needed.
  trailingSlash: true,
  // No Next.js image optimization server on static hosting; we use plain <img>.
  images: { unoptimized: true },
  // Lint is run separately (npm run lint); don't fail production builds on it.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

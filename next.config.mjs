/** @type {import('next').NextConfig} */
const nextConfig = {
  // nodemailer uses dynamic requires that Next's bundler mishandles; keep it
  // as an external server package so the /api/book function loads it at runtime.
  serverExternalPackages: ['nodemailer'],
};

export default nextConfig;

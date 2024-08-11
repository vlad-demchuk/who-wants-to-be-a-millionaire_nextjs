/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['__tests__', 'app', 'components', 'contexts', 'data', 'lib'], // Specify folders for 'npm run lint'
  },
};

export default nextConfig;

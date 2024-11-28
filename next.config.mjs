/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'www.jennexplores.com',
      },
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'static.skillshare.com',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'i.pravatar.cc',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}

export default nextConfig

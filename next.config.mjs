/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: {
    appIsrStatus: false,
  },
  allowedDevOrigins: ["192.168.1.100", "localhost:3000"],
};

export default nextConfig;

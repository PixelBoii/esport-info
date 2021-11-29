module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    return {
      ...config,
      experiments: {
        topLevelAwait: true,
        layers: true,
      }
    }
  },
}

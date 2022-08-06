const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const securityHeaders = require("./configs/next/security-headers.js")

/** @type {import('next/types').NextConfig} */
const config = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
  optimizeFonts: true,
  pageExtensions: ["page.tsx"],
  poweredByHeader: false,
  productionBrowserSourceMaps:
    process.env.PRODUCTION_BROWSER_SOURCE_MAPS === "true",
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "tsconfig.build.json",
  },
}

module.exports = withBundleAnalyzer(config)

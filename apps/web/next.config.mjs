// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'))

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    appDir: true,
    // Enables hot-reload and easy integration for local packages
    transpilePackages: ['@poneglyph/api', '@poneglyph/auth', '@poneglyph/db'],
  },
}
export default config

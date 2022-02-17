// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  i18n: {
    locales: ['sq', 'en'],
    defaultLocale: 'sq',
    localeDetection: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '../../libs/albli-ui/src/lib/styles')]
  }
};

module.exports = withNx(withBundleAnalyzer(nextConfig));

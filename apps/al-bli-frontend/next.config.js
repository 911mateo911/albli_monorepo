// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

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
  }
};

module.exports = withNx(nextConfig);

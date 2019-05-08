module.exports = api => {
  api.cache(true);

  return {
    presets: [
      '@babel/env',
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build',
        },
      ],
    ],
    env: {
      build: {
        ignore: [
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.story.jsx',
          '**/*.stories.jsx',
          '__snapshots__',
          '__tests__',
          '__stories__',
        ],
      },
    },
    ignore: ['node_modules'],
  };
};

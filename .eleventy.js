const
  dev = global.dev = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = config => {
  /* --- PLUGINS --- */

  // navigation
  config.addPlugin(require('@11ty/eleventy-navigation'));
  config.addCollection('post', collection =>

    collection
      .getFilteredByGlob('./src/articles/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))

  );
  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: 'build'
    }

  };
};
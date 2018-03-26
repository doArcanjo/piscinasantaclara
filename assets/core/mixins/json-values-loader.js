export const contentLoader = {
  created: function () {
    console.log('Content loader activated');
  },
  methods: {
    getContentList: function (folder, ext, url) {
      console.log('hello from mixin!')
      const context = require.context('~/content/', true, /\.json$/);
      console.error(`Here we go:`)
      console.log(`${context.keys}`)
      const list = context.keys().map(key => ({
        ...context(key),
        _path: `${url}/${key.replace(`.${ext}`, '').replace('./', '')}`
      }));

      return list;
    }
  }
}
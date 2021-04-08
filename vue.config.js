module.exports = {
    indexPath: 'index.html',
    lintOnSave: true,
    publicPath: './',
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: '[name]-[hash]'
                },
                localsConvention: 'camelCaseOnly'
            }
        }
    }
}
  
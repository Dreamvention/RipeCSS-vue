module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ]
  ],
  plugins: ['@babel/proposal-object-rest-spread']
}

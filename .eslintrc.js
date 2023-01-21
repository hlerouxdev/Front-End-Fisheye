module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'import/no-cycle': ['off'],
    'no-useless-escape': ['off'],
    'no-param-reassign': ['off'],
  },
};

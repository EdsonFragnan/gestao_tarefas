module.exports = app => {
  const env = process.env.NODE_ENV;
  console.log(env);
  if (Boolean(env)) {
    return require('./config.' + env);
  }
  return require('./config.development.js');
}

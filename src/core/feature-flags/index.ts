if (true) {
  const feature_flags = (() => {
    try {
      return require('./flags.json');
    } catch (err) {
      return {};
    }
  })();

  window.APP_SETTINGS = { feature_flags };
}

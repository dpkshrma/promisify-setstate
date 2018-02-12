const promisifySetState = (WrappedComponent) => {
  WrappedComponent.prototype.originalSetState = WrappedComponent.prototype.setState; // eslint-disable-line
  WrappedComponent.prototype.setState = function (partialState, callback) { // eslint-disable-line
    return new Promise((resolve) => {
      this.originalSetState(partialState, (...args) => {
        if (callback) callback(args);
        resolve(args);
      });
    });
  };
  return WrappedComponent;
};

module.exports = promisifySetState;

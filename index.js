const promisifySetState = (WrappedComponent) => {
  WrappedComponent.prototype.originalSetState = WrappedComponent.prototype.setState;
  WrappedComponent.prototype.setState = function(partialState) {
    return new Promise((resolve) => {
      this.originalSetState(partialState, (...args) => {
        resolve(args);
      });
    });
  };
  return WrappedComponent;
};

module.exports = promisifySetState;

"use strict";

var promisifySetState = function promisifySetState(WrappedComponent) {
  WrappedComponent.prototype.originalSetState = WrappedComponent.prototype.setState; // eslint-disable-line
  WrappedComponent.prototype.setState = function (partialState, callback) {
    var _this = this;

    // eslint-disable-line
    return new Promise(function (resolve) {
      _this.originalSetState(partialState, function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (callback) callback(args);
        resolve(args);
      });
    });
  };
  return WrappedComponent;
};

module.exports = promisifySetState;
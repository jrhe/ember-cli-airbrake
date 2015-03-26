/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-airbrake',
  isEnabled: function () {
    var options = this.app.options.airbrake;
    return typeof options !== 'undefined' || !!options;
  },
  included: function(app) {
    if (this.isEnabled()) {
      app.import("vendor/airbrake-shim.js");
    }
  }
};

// Generated by CoffeeScript 1.10.0
(function() {
  var Engine, Rater, Similars, Suggestions, async;

  async = require('async');

  Rater = require('./rater');

  Similars = require('./similars');

  Suggestions = require('./suggestions');

  module.exports = Engine = (function() {
    function Engine() {
      this.likes = new Rater(this, 'likes');
      this.dislikes = new Rater(this, 'dislikes');
      this.similars = new Similars(this);
      this.suggestions = new Suggestions(this);
    }

    return Engine;

  })();

}).call(this);

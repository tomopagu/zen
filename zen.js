var _ = require('lodash');
var zenMessage = require('./zen-message.js').zenMessage;

module.exports = function zen(dirtyDay) {
    var day = _.toInteger(dirtyDay);
    var thought = _.find(zenMessage, { 'day': day });
    var jpthought = thought.thought_jp.replace(/\|/g, '<br>');
    var enthought = thought.thought_en.replace(/\|/g, '<br>');

    return {
        day: thought.day,
        jpthought: jpthought,
        enthought: enthought,
    };
};

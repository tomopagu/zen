const _ = require('lodash');
const { zenMessage } = require('./zen-message.js');

module.exports = function zen(dirtyDay) {
  const day = _.toInteger(dirtyDay);
  const thought = _.find(zenMessage, { day });
  const jpthought = thought.thought_jp.replace(/\|/g, '<br>');
  const enthought = thought.thought_en.replace(/\|/g, '<br>');

  return {
    day: thought.day,
    jpthought,
    enthought,
  };
};

"use strict"

if (typeof Meteor === 'undefined' /*import if npm*/) {
  //external
  var moment = require('moment');
  var _ = require('underscore');
}


//simple set of functions for formatting field values
var as = {};

as.v = function formatAsValue(value) {
  var self = this;//will be the column definition
  if ( _.isUndefined(value) ) {
    console.log(value);
    throw new Error('value is undefined');
  }
  return value.toString().trim().substr(0, self.size);
};

as.indicator = function formatAsValue(value) {
  var self = this;
  var value = value || '';
  return value.toString().trim().substr(0, self.size);
};

as.amount = function formatAsAmount(value) {
  var self = this;
  return Math.round(value * 100).toString();
};

as.date = function formatAsDate(value) {
  var self = this;//will be the column definition
  return moment().utcOffset(11 * 60).format('DDMMYY');
  //console.log('this',this, 'value',value);
  //return 'DDMMYY';//value.toString().trim().substr(0, self.size);
};

as.bsbFill = function () {
  return '999-999';
}


if (typeof module !== 'undefined') {
  module.exports = as;
}

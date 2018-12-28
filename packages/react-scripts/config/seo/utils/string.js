'use strict';
const toCapitalize = ([first, ...other]) => {
  return [first.toUpperCase(), ...other].join('');
};

module.exports = { toCapitalize };

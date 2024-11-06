const randomstring = require('randomstring');

const randomString = (length) => {
  return randomstring.generate({
    length,
    charset: 'alphanumeric', // Only letters and numbers
  });
};

module.exports = {
  randomString,
};

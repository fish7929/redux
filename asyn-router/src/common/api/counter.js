import fetch from 'isomorphic-fetch';
module.exports = function() {
  fetch('/api/counter')
  .then(res => {
      return res.json({value: getRandomInt(1, 100)});
  })
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

import fetch from 'isomorphic-fetch';
module.exports = function() {
  fetch('/api/counter')
  .then(res => {
      setTimeout(function () {
        if (Math.random() < 0.33) {
          res.status(500).end();
        } else {
          console.log(85522);
          return res.json({value: getRandomInt(1, 100)});
        }
      }, 1000)
  })
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

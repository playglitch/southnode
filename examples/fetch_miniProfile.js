const Southnode = require('..');
const sn = new Southnode();

var dataIn = "doamatto"; // A username example

sn.miniProfile(dataIn)
  .then(res => {
    return console.log(res);
  })
  .catch(err => {
    return console.error(`Something went horribly wrong! ${err}`);
  });
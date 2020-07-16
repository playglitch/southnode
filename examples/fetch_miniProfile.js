const southnode = require('..');
const sn = new southnode();

var data_in = "doamatto"; // A username example

sn.miniProfile(data_in)
  .then(res => {
    return console.log(res);
  })
  .catch(err => {
    return console.error(`Something went horribly wrong! ${err}`);
  });
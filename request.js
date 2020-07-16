const fetch = require('node-fetch');

module.exports = class Request {
  constructor() {
    this.baseURL = "https://southpine.playglitch.xyz/";
  }

  async send(args, params) {
    var res = await fetch(this.createUrl(args, params))
    var data = await res.json()
    if(res.status !== 200) {
      switch(res.status) {
        case 401:
          console.error(
            "The user or lobby you requested has a private profile."
          );
          break;
        case 403:
          console.error(
            "The user or lobby you requested has a private profile."
          );
          break;
        case 404:
          console.error(
            "The user or lobby you requested doesn't exist."
          );
          break;
        case 500:
          console.error(
            "The API server is either not responding or is down."
          );
          break;
      }
    } else return data;
  }

  createUrl (args, params) {
    const URL = require('url').URL;
    const url = new URL(this.baseURL);
    url.pathname += `/${args.filter(a=>a).join("/")}`
    for (let p in params) {
      url.searchParams.set(p, params[p]);
    }
    return url.href;
  }
}
const fetch = require('node-fetch');
const {Error, Warning, CritError} = require('./errorhandling.js');
const flgs = process.argv.slice(2); // For handling verbosity

module.exports = class Request {
  constructor() {
    this.baseURL = "https://southpine.playglitch.xyz/";
  }

  ensureVerbose() {
    if(flgs !== "verbose")
      return throw new Warning("")
  }

  async send(args, params) {
    if(args == "")
      return throw new Error("No method was provided (profile, miniProfile, lobby).");
    if(params == "")
      return throw new Error("No parameter(s) was/were provided (username, lobby ID, authentication token).");
    var res = await fetch(this.createUrl(args, params))
    var data = await res.json()
    if(res.status !== 200) {
      switch(res.status) {
        case 401:
          throw new Error(
            "The user or lobby you requested has a private profile."
          );
          break;
        case 403:
          throw new Error(
            "The user or lobby you requested has a private profile."
          );
          break;
        case 404:
          throw new Error(
            "The user or lobby you requested doesn't exist."
          );
          break;
        case 500:
          throw new Error(
            "The API server is either not responding or is down."
          );
          break;
        default:
          throw new CritError(
            `Unknown error. Please report this issue on GitHub at
            https://github.com/doamatto/southnode/issues/new/`
          );
          break;
      }
    } else return data;
  }

  createUrl (args, params) {
    const URL = require('url').URL;
    const url = new URL(this.baseURL);
    url.pathname += `?${args.filter(a=>a).join("/")}`
    for (let p in params) {
      url.searchParams.set(p, params[p]);
    }
    return url.href;
  }
}

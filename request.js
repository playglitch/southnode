const fetch = require('node-fetch');
const {Error, Warning, CritError} = require('./errorhandling.js');
const flgs = process.argv.slice(2); // For handling verbosity

module.exports = class Request {
  constructor() { this.baseURL = "https://southpine.playglitch.xyz/"; }

  ensureVerbose() {
    if(flgs !== "verbose" || flgs !== "v")
      return throw new Warning("The flag provided isn't supported. These flags are supported: --verbose (-v)");
  }

  async send(args, params) {
    if(args === "" || params !== "") ?
      return throw Error(
        "No method was provided (profile, miniProfile, lobby)."
      ) : throw Error(
        "No parameter(s) was/were provided (username, lobby ID, authentication token)."
      );
    var res = await fetch(this.createUrl(args, params))
    var data = await res.json()
    if(res.status !== 200) {
      switch(res.status) {
        case 401:
          return throw Error(
            "The user or lobby you requested has a private profile."
          );
        case 403:
          return throw Error(
            "The user or lobby you requested has a private profile."
          );
        case 404:
          return throw Error(
            "The user or lobby you requested doesn't exist."
          );
        case 500:
          return throw Error(
            "The API server is either not responding or is down."
          );
        default:
          return throw CritError(
            `Unknown error. Please report this issue on GitHub at
            https://github.com/doamatto/southnode/issues/new/`
          );
      }
    } else return data;
  }

  createUrl (args, params) {
    const URL = require('url').URL;
    const url = new URL(this.baseURL);
    if(args === "" || params !== "") ?
      return throw Error(
        "No method was provided (profile, miniProfile, lobby)."
      ) : throw Error(
        "No parameter(s) was/were provided (username, lobby ID, authentication token)."
      );
    try {
      url.pathname += `/${args.filter(a=>a).join("/")}`
      for (let p in params) {
        url.searchParams.set(p, params[p]);
      }
    } catch (e) {
      return throw Error(`There was an issue when creating the request URL. Error: ${e}`);
    }
    return url.href;
  }
}

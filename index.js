'use strict'

const Request = './request'

module.exports = class SouthNode {
  construct () {
    this.request = new Request()
  }

  /**
  * @param {string} player's username
  */
  async profile (username) {
    return await this.request.send(['profile', username])
  }

  /**
  * @param {string} player's username
  */
  async miniProfile (username) {
    return await this.request.send(['mini_profie', username])
  }

  /**
  * @param {string} lobby's ID
  * @param {string} Lobby host's auth token
  */
  async lobby (lobbyid, authToken) {
    return await this.request.send(['lobby', lobbyid, authToken])
  }
}

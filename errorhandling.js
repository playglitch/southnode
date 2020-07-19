module.exports = class ErrorHandling {
  // Error Handling
  Warning (e) {
    this.message = `[WARN] ${e}`
    return this.message
  }

  Error (e) {
    this.message = `[ERROR] ${e}`
    console.error(this.message)
    return process.exit(1)
  }

  CritError (e) {
    this.message = `[CRITICAL ERROR] ${e}`
    console.error(this.message)
    return process.exit(1)
  }
}

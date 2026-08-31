class AppError extends Error {
  /**
   *
   * @param {number} status
   * @param {String} message
   */
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = AppError;

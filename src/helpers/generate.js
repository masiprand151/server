/**
 * Outputs: INV-20260903-4829
 * @param {string} prefix
 * @returns {string}
 */
function invoiceNumber(prefix = "INV") {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
  const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random number

  return `${prefix}-${date}-${random}`;
}

/**
 * Outputs: INV-000042
 * @param {number} counter
 * @param {string} prefix
 * @param {number} length
 * @returns {string}
 */
function formatSequentialInvoice(counter, prefix = "INV", length = 6) {
  const paddedCounter = String(counter).padStart(length, "0");

  return `${prefix}-${paddedCounter}`;
}

/**
 * Outputs: INV-F83A2D1B
 * @param {string} prefix
 * @returns {string}
 */
function secureInvoice(prefix = "INV") {
  return `${prefix}-${crypto.randomUUID().split("-")[0].toUpperCase()}`;
}

module.exports = {
  invoiceNumber,
  formatSequentialInvoice,
  secureInvoice,
};

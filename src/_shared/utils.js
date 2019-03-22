/**
 * This function find a crypto icon by searching the global app state
 * for the symbol in our list of supported cryptocurrencies.
 * @param {Array} currencies - an array of objects to search
 * @param {String} symbol - the crypto symbol
 * @returns {String} - the image path source
 */
export const getIcon = (currencies, symbol) => {
  return currencies.find(index => index.symbol === symbol).icon;
};



/**
 * This returns an exchange rate based on the contract's
 * makerTokenQuantity and takerTokenQuantity.
 * @param {Object} contract - the contract
 * @returns {Number} exchange rate - the exchangeRate of the contract
 */
export const getExchangeRate = contract => {
  return contract.takerTokenQuantity / contract.makerTokenQuantity;
};



/**
 * This returns the contract's status based on the
 * contract parameters.
 * @param {Object} contract - the contract
 * @returns {String} status - the status of the contract
 */
export const getStatus = contract => {
  let status = 'open';

  if (contract.swapRequested) status = 'complete';
  if (contract.cancelled) status = 'cancelled';

  return status;
};

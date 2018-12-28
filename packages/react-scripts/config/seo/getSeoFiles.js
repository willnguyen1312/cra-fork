'use strict';
const { populatePair } = require('./utils/pairs');

// This is fileNames data to have path when we deploy to Amazon S3
const getSeoFiles = () => {
  const seoFiles = {
    accounts: [
      {
        fileName: 'sign-in',
      },
      {
        fileName: 'sign-up',
      },
      {
        fileName: 'forgot-password',
      },
    ],
    trade: [
      {
        fileName: 'markets',
      },
      {
        fileName: 'wallets',
      },
      {
        fileName: 'settings',
      },
      {
        fileName: 'lend',
      },
      {
        fileName: 'ico-market',
      },
      {
        fileName: 'ico-history',
      },
      {
        fileName: 'ico-mission-control',
      },
    ],
  };

  populatePair((base, quote, tradeType) => {
    seoFiles.trade.push({
      fileName: `${base}${quote}`,
      parentFolder: tradeType,
    });
  });

  return seoFiles;
};

module.exports = { getSeoFiles };

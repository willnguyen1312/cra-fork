'use strict';
const pairsByTradeType = {
  exchange: [
    {
      base: 'BTC',
      quote: 'JPY',
    },
    {
      base: 'BTC',
      quote: 'USD',
    },
    {
      base: 'CRPT',
      quote: 'BTC',
    },
    {
      base: 'ETH',
      quote: 'BTC',
    },
    {
      base: 'NEO',
      quote: 'BTC',
    },
    {
      base: 'ETH',
      quote: 'JPY',
    },
    {
      base: 'ETH',
      quote: 'USD',
    },
    {
      base: 'MGO',
      quote: 'BTC',
    },
    {
      base: 'MGO',
      quote: 'ETH',
    },
    {
      base: 'BTC',
      quote: 'SGD',
    },
    {
      base: 'QTUM',
      quote: 'BTC',
    },
    {
      base: 'QASH',
      quote: 'JPY',
    },
    {
      base: 'FSN',
      quote: 'BTC',
    },
    {
      base: 'FSN',
      quote: 'ETH',
    },
    {
      base: 'TPAY',
      quote: 'BTC',
    },
    {
      base: 'ETH',
      quote: 'SGD',
    },
    {
      base: 'LIKE',
      quote: 'BTC',
    },
    {
      base: 'QASH',
      quote: 'ETH',
    },
    {
      base: 'QASH',
      quote: 'BTC',
    },
    {
      base: 'ETN',
      quote: 'BTC',
    },
    {
      base: 'GET',
      quote: 'ETH',
    },
    {
      base: 'MITX',
      quote: 'BTC',
    },
    {
      base: 'ETN',
      quote: 'ETH',
    },
    {
      base: '1WO',
      quote: 'ETH',
    },
    {
      base: 'MRK',
      quote: 'BTC',
    },
    {
      base: 'MRK',
      quote: 'ETH',
    },
    {
      base: '1WO',
      quote: 'BTC',
    },
    {
      base: 'STX',
      quote: 'BTC',
    },
    {
      base: 'STX',
      quote: 'ETH',
    },
    {
      base: 'KRL',
      quote: 'BTC',
    },
    {
      base: 'KRL',
      quote: 'ETH',
    },
    {
      base: 'IPSX',
      quote: 'BTC',
    },
    {
      base: 'SNIP',
      quote: 'ETH',
    },
    {
      base: 'LIKE',
      quote: 'ETH',
    },
    {
      base: 'MITX',
      quote: 'ETH',
    },
    {
      base: 'SAL',
      quote: 'BTC',
    },
    {
      base: 'STU',
      quote: 'ETH',
    },
    {
      base: 'THRT',
      quote: 'BTC',
    },
    {
      base: 'THRT',
      quote: 'ETH',
    },
    {
      base: 'GET',
      quote: 'BTC',
    },
    {
      base: 'IPSX',
      quote: 'ETH',
    },
    {
      base: 'TPAY',
      quote: 'ETH',
    },
    {
      base: 'XRP',
      quote: 'JPY',
    },
    {
      base: 'XES',
      quote: 'BTC',
    },
    {
      base: 'ADH',
      quote: 'BTC',
    },
    {
      base: 'GZE',
      quote: 'BTC',
    },
    {
      base: 'XES',
      quote: 'ETH',
    },
    {
      base: 'SAL',
      quote: 'ETH',
    },
    {
      base: 'FLIXX',
      quote: 'ETH',
    },
    {
      base: 'AMLT',
      quote: 'ETH',
    },
    {
      base: 'AMLT',
      quote: 'BTC',
    },
    {
      base: 'CRPT',
      quote: 'ETH',
    },
    {
      base: 'STU',
      quote: 'BTC',
    },
    {
      base: 'FLIXX',
      quote: 'BTC',
    },
    {
      base: 'ETH',
      quote: 'HKD',
    },
    {
      base: 'FTT',
      quote: 'BTC',
    },
    {
      base: 'BTC',
      quote: 'AUD',
    },
    {
      base: 'ADH',
      quote: 'ETH',
    },
    {
      base: 'DACS',
      quote: 'BTC',
    },
    {
      base: 'DRG',
      quote: 'BTC',
    },
    {
      base: 'DRG',
      quote: 'ETH',
    },
    {
      base: 'DACS',
      quote: 'ETH',
    },
    {
      base: 'QASH',
      quote: 'USD',
    },
    {
      base: 'FTT',
      quote: 'ETH',
    },
    {
      base: 'ETH',
      quote: 'EUR',
    },
    {
      base: 'SPHTX',
      quote: 'BTC',
    },
    {
      base: 'ALX',
      quote: 'BTC',
    },
    {
      base: 'BCH',
      quote: 'JPY',
    },
    {
      base: 'QASH',
      quote: 'SGD',
    },
    {
      base: 'LND',
      quote: 'ETH',
    },
    {
      base: 'LTC',
      quote: 'BTC',
    },
    {
      base: 'ETC',
      quote: 'BTC',
    },
    {
      base: 'TRX',
      quote: 'ETH',
    },
    {
      base: 'BTC',
      quote: 'EUR',
    },
    {
      base: 'STAC',
      quote: 'ETH',
    },
    {
      base: 'EARTH',
      quote: 'BTC',
    },
    {
      base: 'SHP',
      quote: 'ETH',
    },
    {
      base: 'ETH',
      quote: 'PHP',
    },
    {
      base: 'FTX',
      quote: 'ETH',
    },
    {
      base: 'ZCO',
      quote: 'ETH',
    },
    {
      base: 'ZCO',
      quote: 'BTC',
    },
    {
      base: 'UBTC',
      quote: 'ETH',
    },
    {
      base: 'XRP',
      quote: 'BTC',
    },
    {
      base: 'FLP',
      quote: 'ETH',
    },
    {
      base: 'XMR',
      quote: 'BTC',
    },
    {
      base: 'XLM',
      quote: 'ETH',
    },
    {
      base: 'BCH',
      quote: 'USD',
    },
    {
      base: 'ETH',
      quote: 'AUD',
    },
    {
      base: 'SGN',
      quote: 'BTC',
    },
    {
      base: 'ELY',
      quote: 'BTC',
    },
    {
      base: 'BTC',
      quote: 'PHP',
    },
    {
      base: 'RKT',
      quote: 'USD',
    },
    {
      base: 'XRP',
      quote: 'SGD',
    },
    {
      base: 'XEM',
      quote: 'BTC',
    },
    {
      base: 'QASH',
      quote: 'AUD',
    },
    {
      base: 'QASH',
      quote: 'IDR',
    },
    {
      base: 'ZEC',
      quote: 'BTC',
    },
    {
      base: 'ECH',
      quote: 'ETH',
    },
    {
      base: 'ZPR',
      quote: 'BTC',
    },
    {
      base: 'EZT',
      quote: 'BTC',
    },
    {
      base: 'BTC',
      quote: 'INR',
    },
    {
      base: 'DASH',
      quote: 'USD',
    },
    {
      base: 'HAV',
      quote: 'ETH',
    },
    {
      base: 'QTUM',
      quote: 'EUR',
    },
    {
      base: 'EARTH',
      quote: 'ETH',
    },
    {
      base: 'XRP',
      quote: 'EUR',
    },
    {
      base: 'LALA',
      quote: 'ETH',
    },
    {
      base: 'ETH',
      quote: 'IDR',
    },
    {
      base: 'LND',
      quote: 'BTC',
    },
    {
      base: 'RKT',
      quote: 'BTC',
    },
    {
      base: 'NEO',
      quote: 'ETH',
    },
    {
      base: 'LDC',
      quote: 'ETH',
    },
    {
      base: 'QTUM',
      quote: 'SGD',
    },
    {
      base: 'BCH',
      quote: 'BTC',
    },
    {
      base: 'SGN',
      quote: 'ETH',
    },
    {
      base: 'ECH',
      quote: 'BTC',
    },
    {
      base: 'ZPR',
      quote: 'ETH',
    },
    {
      base: 'RKT',
      quote: 'EUR',
    },
    {
      base: 'ELY',
      quote: 'ETH',
    },
    {
      base: 'BTC',
      quote: 'CNY',
    },
    {
      base: 'QTUM',
      quote: 'USD',
    },
    {
      base: 'NEO',
      quote: 'EUR',
    },
    {
      base: 'ALX',
      quote: 'ETH',
    },
    {
      base: 'RKT',
      quote: 'ETH',
    },
    {
      base: 'BTC',
      quote: 'IDR',
    },
    {
      base: 'LDC',
      quote: 'BTC',
    },
    {
      base: 'NEO',
      quote: 'SGD',
    },
    {
      base: 'VZT',
      quote: 'BTC',
    },
    {
      base: 'UBTC',
      quote: 'JPY',
    },
    {
      base: 'TRX',
      quote: 'BTC',
    },
    {
      base: 'UBTC',
      quote: 'SGD',
    },
    {
      base: 'FTT',
      quote: 'QASH',
    },
    {
      base: 'STAC',
      quote: 'BTC',
    },
    {
      base: 'BTC',
      quote: 'HKD',
    },
    {
      base: 'QTUM',
      quote: 'JPY',
    },
    {
      base: 'XRP',
      quote: 'USD',
    },
    {
      base: 'STORJ',
      quote: 'ETH',
    },
    {
      base: 'ELY',
      quote: 'QASH',
    },
    {
      base: 'BCH',
      quote: 'SGD',
    },
    {
      base: 'EZT',
      quote: 'ETH',
    },
    {
      base: 'NEO',
      quote: 'USD',
    },
    {
      base: 'VZT',
      quote: 'ETH',
    },
    {
      base: 'UBTC',
      quote: 'USD',
    },
    {
      base: 'XRP',
      quote: 'IDR',
    },
    {
      base: 'DENT',
      quote: 'QASH',
    },
    {
      base: 'QASH',
      quote: 'EUR',
    },
    {
      base: 'SPHTX',
      quote: 'ETH',
    },
    {
      base: 'NEO',
      quote: 'JPY',
    },
    {
      base: 'FTX',
      quote: 'BTC',
    },
  ],
  margin: [
    {
      base: 'BTC',
      quote: 'USD',
    },
    {
      base: 'ETH',
      quote: 'USD',
    },
    {
      base: 'BTC',
      quote: 'EUR',
    },
    {
      base: 'ETH',
      quote: 'EUR',
    },
    {
      base: 'BTC',
      quote: 'JPY',
    },
    {
      base: 'ETH',
      quote: 'JPY',
    },
    {
      base: 'XRP',
      quote: 'JPY',
    },
    {
      base: 'BTC',
      quote: 'SGD',
    },
    {
      base: 'ETH',
      quote: 'SGD',
    },
    {
      base: 'BTC',
      quote: 'AUD',
    },
    {
      base: 'ETH',
      quote: 'AUD',
    },
    {
      base: 'BTC',
      quote: 'HKD',
    },
    {
      base: 'BTC',
      quote: 'IDR',
    },
    {
      base: 'BTC',
      quote: 'PHP',
    },
    {
      base: 'BTC',
      quote: 'CNY',
    },
    {
      base: 'BTC',
      quote: 'INR',
    },
    {
      base: 'BCH',
      quote: 'JPY',
    },
    {
      base: 'XRP',
      quote: 'USD',
    },
    {
      base: 'BCH',
      quote: 'USD',
    },
    {
      base: 'XRP',
      quote: 'SGD',
    },
    {
      base: 'BCH',
      quote: 'SGD',
    },
    {
      base: 'XRP',
      quote: 'EUR',
    },
  ],
};

const populatePair = populateFunction => {
  // exchange/margin
  const tradeTypes = Object.keys(pairsByTradeType);

  tradeTypes.forEach(tradeType => {
    const pairs = pairsByTradeType[tradeType];
    pairs.forEach(pair => {
      const { base, quote } = pair;
      populateFunction(base, quote, tradeType);
    });
  });
};
module.exports = { populatePair };

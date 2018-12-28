'use strict';
const { populatePair } = require('./utils/pairs');
const { toCapitalize } = require('./utils/string');

const getSEODataByTradeType = (base, quote, vendor, market) => {
  const getSEOData = getTradeSEOData[market];
  const { title, description } = getSEOData(base, quote, vendor);

  const pairSEOData = {
    path: `${base}${quote}`,
    parentFolder: market,
    title,
    description,
  };

  return pairSEOData;
};

// This function is for generating currency pairs meta data
const getTradeSEOData = {
  exchange: (base, quote, vendor) => {
    return {
      title: `${base}/${quote} | Simply Buy ${base} with ${quote} | ${vendor}`,
      description: `Buy and sell ${base} with ${quote} is simple and easy with ${vendor}. Our proprietary algorithm provides you the latest ${base} price with a low spread.`,
    };
  },
  margin: (base, quote, vendor) => {
    return {
      title: `${base}/${quote} | ${base} up to 25x Leverage | ${vendor}`,
      description: `Trade ${base} and ${quote} with up to 25x leverage. ${vendor} is the sophisticated platform to trade ${base} and ${quote}, powered with great liquidity & low spread.`,
    };
  },
};

// get SEO config for each app (trade, accounts)
const getSeoConfig = (vendor, appName) => {
  appName = toCapitalize(appName);
  vendor = toCapitalize(vendor);

  const baseTitle = `${vendor} Cryptocurrency Exchange`;
  const baseData = {
    // This is for root app, the meta data will be displayed when the app is loading
    // for example: Liquid App
    seoRoot: {
      title: `${vendor} ${appName}`,
      description: `${vendor} - World’s most advanced cryptocurrency trading platform`,
    },
    seoData: {
      // Accounts App
      accounts: [
        {
          path: 'sign-in',
          title: `Sign In | ${baseTitle}`,
          description: `Welcome back! Sign in to your ${vendor} account and trade cryptocurrencies in the world's most advanced and secure crypto exchange.`,
        },
        {
          path: 'sign-up',
          title: `Sign Up | ${baseTitle}`,
          description: `Welcome! Sign up your ${vendor} account today and trade cryptocurrencies in the world's most advanced and secure crypto exchange.`,
        },
        {
          path: 'forgot-password',
          title: `Reset Password | ${baseTitle}`,
          description: `Reset the password of your ${vendor} account today and trade cryptocurrencies in the world's most advanced and secure crypto exchange.`,
        },
      ],

      // Trade App, we will add meta datas for each currency pair
      trade: [
        {
          path: 'markets',
          title: `Crypto Market & Latest Prices | What Token is Moving Today? | ${vendor}`,
          description: `Cryptocurrency market, latest prices, charts, and more`,
        },
        {
          path: 'margin',
          title: `Trade Cryptocurrencies up to 25x Leverage | ${vendor}`,
          description: `Trade cryptocurrencies with up to 25x leverage. ${vendor} offers the most sophisticated crypto exchange, powered with great liquidity & lowest spread.`,
        },
        {
          path: 'exchange',
          title: `Buy and Sell Cryptocurrencies Made Easy | ${vendor}`,
          description: `Buy and sell cryptocurrencies is simple and easy with ${vendor}. Our proprietary algorithm provides you the most-updated price with the lowest spread.`,
        },
        {
          path: 'wallets',
          title: `Wallets | ${vendor}`,
          description: `Manage your crypto assets on ${vendor}, simply exchange your USD, JPY, EUR to BTC, ETH, QASH and more`,
        },
        {
          path: 'settings',
          title: `Settings | ${vendor}`,
          description: `Manage your account settings on ${vendor}, simply exchange your USD, JPY, EUR to BTC, ETH, QASH and more`,
        },
        {
          path: 'lend',
          title: `Lend Crypto Asset - Competitive Daily Interest Rate | ${vendor}`,
          description: `Make extra income with crypto by lending your assets. ${vendor} provides a 100% safe platform, where you can set your own interest rate. Learn More.`,
        },
        {
          path: 'ico-market',
          title: `ICO and Token Sales | Invest in quality ICOs easily | ${vendor}`,
          description: `Our ICOs and token sales projects are carefully vetted. Buy ICO tokens instantly with a verified ${vendor} account and get delivered instantly via our network.`,
        },
        {
          path: 'ico-history',
          title: `View your history | ${vendor}`,
          description:
            'Check out the full breakdown of tokens sales you’ve taken parts in.',
        },
        {
          path: 'ico-mission-control',
          title: `Ready to launch your ICO? | ${vendor}`,
          description:
            'ICO Mission Control is an end-to-end solution for connecting KYC-verified investors with high-quality blockchain projects in a secure, transparent environment.',
        },
      ],
    },
  };

  populatePair((base, quote, tradeType) => {
    const pairSEOData = getSEODataByTradeType(base, quote, vendor, tradeType);
    baseData.seoData.trade.push(pairSEOData);
  });

  return baseData;
};

module.exports = { getSeoConfig };

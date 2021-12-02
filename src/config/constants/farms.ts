import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MSWAP',
    lpAddresses: {
      97: '0xdA38540DcEf3Da8fA4906b8f11D49604d38628F1',
      56: '0x90Ebf5bF9e0486893deBC85Dcf164d1dDC107e0c',
    },
    isTokenOnly: true,
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      97: '0xdA38540DcEf3Da8fA4906b8f11D49604d38628F1',
      56: '0x9393d3C08956F245cdEE9ac9DD7214131Ae2bB8B',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MUFT',
    lpAddresses: {
      97: '0xdA38540DcEf3Da8fA4906b8f11D49604d38628F1',
      56: '0x8858cFb3f8C901381bd52F8aCf5bFB888dce421d',
    },
    isTokenOnly: true,
    tokenSymbol: 'Muft',
    tokenAddresses: {
      97: '0xdA38540DcEf3Da8fA4906b8f11D49604d38628F1',
      56: '0x1d4a26a9d980afc2287dca15eb896a26384bac7c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'MSWAP-MUFT LP',
    lpAddresses: {
      97: '0x382c7e4111d072e37180c95ec627f760b75d4455',
      56: '0x0444457A8eb29e1Bdd13569c213F068b998f5660',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      97: '0x382c7e4111d072e37180c95ec627f760b75d4455',
      56: '0x9393d3C08956F245cdEE9ac9DD7214131Ae2bB8B',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'MSWAP-BNB LP',
    lpAddresses: {
      97: '0x382c7e4111d072e37180c95ec627f760b75d4455',
      56: '0x90Ebf5bF9e0486893deBC85Dcf164d1dDC107e0c',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      97: '0x382c7e4111d072e37180c95ec627f760b75d4455',
      56: '0x9393d3C08956F245cdEE9ac9DD7214131Ae2bB8B',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'MUFT-BNB LP',
    lpAddresses: {
      97: '0x382c7e4111d072e37180c95ec627f760b75d4455',
      56: '0x8858cFb3f8C901381bd52F8aCf5bFB888dce421d',
    },
    tokenSymbol: 'MUFT',
    tokenAddresses: {
      97: '0x382c7e4111d072e37180c95ec627f760b75d4455',
      56: '0x1d4a26a9d980afc2287dca15eb896a26384bac7c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms

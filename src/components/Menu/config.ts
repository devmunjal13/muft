import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeUpdatedIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/info/pool/0x90ebf5bf9e0486893debc85dcf164d1ddc107e0c', // 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: '', // 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  // {
  //   label: 'Red Pools',
  //   icon: 'PoolpdatedIcon',
  //   href: '/farms',
  // },
  {
    label: 'Devil`s Farms',
    icon: 'FarmUpdatedIcon',
    href: '/farms',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Devil`s Pools',
    icon: 'MoreIcon',
    href: '/pools',
  },
  {
    label: 'SNFT Marketplace',
    icon: 'HomeIcon',
    href: '/nft',
  },
  {
    label: 'Audits',
    icon: 'LotteryIcon',
    href:
      'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_ManUtdFantoken.pdf',
  },
  {
    label: 'ILO',
    icon: 'MoonIcon',
    href: '/comming',
  },
  {
    label: 'Listings',
    icon: 'MoreIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.finance/info/pool/0x90ebf5bf9e0486893debc85dcf164d1ddc107e0c', // 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      // {
      //   label: 'CoinGecko',
      //   href: '/comming', // 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      {
        label: 'CoinMooner',
        href: 'https://coinmooner.com/coin/6924%F0%9F%9A%80',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/muftswap/', // 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      // {
      //   label: 'AstroTools',
      //   href: '', // 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreUpdatedIcon',
    items: [
      // {
      //   label: 'Github',
      //   href:  '', // 'https://github.com/goosedefi/',
      // },
      {
        label: 'Docs',
        href: 'https://docs.manutdfantoken.app/', // 'https://goosedefi.gitbook.io/goose-finance/',
      },
      // {
      //   label: 'Blog',
      //   href: '', //  'https://goosefinance.medium.com/',
      // },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config

import DownloadImage from "./assets/images/instruction-1.png";
import ConnectWalletImage from "./assets/images/instruction-2.png";
import TradeImage from "./assets/images/instruction-3.png";
import EarnImage from "./assets/images/instruction-4.png";

export const FilterNavOptions = [
  {
    id: "highest",
    name: "High to Low",
  },
  {
    id: "lowest",
    name: "Low to High",
  },
  {
    id: "marketcap",
    name: "Market Cap.",
  },
  {
    id: "gainers",
    name: "Top Gainers",
  },
  {
    id: "losers",
    name: "Top Losers",
  },
];

export const HowItWorkSteps = [
  {
    id: "global",
    title: "Global",
    description:
      "Enables seamless cross-border transactions without the need for intermediaries.",
    image: DownloadImage,
  },
  {
    id: "transparency",
    title: "Transparency",
    description:
      "Blockchain technology ensures transparent and immutable transaction records.",
    image: ConnectWalletImage,
  },
  {
    id: "decentralization",
    title: "Decentralization",
    description:
      "Operates without a central authority, offering more autonomy.",
    image: TradeImage,
  },
  {
    id: "investment",
    title: "Investment",
    description:
      "It offers the chance to participate in an emerging financial technology.",
    image: EarnImage,
  },
];

export const FooterOptions = [
  {
    title: "Products",
    suboptions: [
      "Spot",
      "Inverse Perpetual",
      "USDT Perpetual",
      "Exchange",
      "Launchpad",
      "Binance Pay",
    ],
  },
  {
    title: "Services",
    suboptions: [
      "Buy Crypto",
      "Markets",
      "Trading Fee",
      "Affiliate Program",
      "Referral Program",
      "API",
    ],
  },
  {
    title: "Support",
    suboptions: [
      "Bybit Learn",
      "Help Center",
      "User Feedback",
      "Submit a request",
      "API Documentation",
      "Trading Rules",
    ],
  },
  {
    title: "About Us",
    suboptions: [
      "About Bybit",
      "Authenticity Check",
      "Careers",
      "Business Contacts",
      "Blog",
    ],
  },
];

export const developerDetails = {
  phoneNumber: "+91 8302712812",
  email: "gagansaini10999@gmail.com",
  linkedinURL: "https://www.linkedin.com/in/gagan-saini-gs/",
  githubURL: "https://github.com/Gagan-Saini-GS",
};

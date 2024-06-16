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
    id: "download",
    title: "Download",
    description: "Get the app from our website or your preferred app store.",
    image: DownloadImage,
    step: "1",
  },
  {
    id: "connectwallet",
    title: "Connect Wallet",
    description:
      "Link your digital wallet to the app for seamless transactions.",
    image: ConnectWalletImage,
    step: "2",
  },
  {
    id: "trade",
    title: "Start Trading",
    description:
      "Buy, sell, and trade a variety of cryptocurrencies with ease.",
    image: TradeImage,
    step: "3",
  },
  {
    id: "earn",
    title: "Earn Money",
    description:
      "Watch your investments grow and manage your earnings directly in the app.",
    image: EarnImage,
    step: "4",
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

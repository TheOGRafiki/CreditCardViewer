import {
  faCcDiscover,
  faCcAmex,
  faCcVisa,
  faCcMastercard,
  faCcDinersClub,
  faCcJcb,
} from "@fortawesome/free-brands-svg-icons";

export const creditCardDefinitions = {
  Visa: {
    name: "Visa",
    color: "#1a1f71",
    startDigits: ["4"],
    faIcon: faCcVisa,
  },
  Mastercard: {
    name: "Mastercard",
    color: "#f79e1b",
    startDigits: ["51", "52", "53", "54", "55"],
    faIcon: faCcMastercard,
  },
  "American Express": {
    name: "American Express",
    color: "#157dfb",
    startDigits: ["34", "37"],
    faIcon: faCcAmex,
  },
  Discover: {
    name: "Discover",
    color: "#e5e5e5",
    startDigits: ["6011", "622", "64", "65"],
    faIcon: faCcDiscover,
  },
  "Diners Club": {
    name: "Diners Club",
    color: "#888",
    startDigits: ["300", "301", "302", "303", "304", "305", "36", "38"],
    faIcon: faCcDinersClub,
  },
  JCB: {
    name: "JCB",
    color: "#ff5b00",
    startDigits: ["35"],
    faIcon: faCcJcb,
  },
  UnionPay: {
    name: "UnionPay",
    color: "#aa001c",
    startDigits: ["62", "81"],
    faIcon: faCcJcb,
  },
  // Add more credit card brands here as needed
};

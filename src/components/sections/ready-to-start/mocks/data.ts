import { IMAGES } from "@/app/theme/images/images";

export const CARDS = [
  {
    id: 0,
    title: "RAAS Basic",
    // pricing: "€ 2,499",
    image: IMAGES.colleague,
    paymentLink: "https://buy.stripe.com/6oEcQee5LaFn9qgdQQ",
    incentives: [
      {
        heading: "What do you get?",
        items: [
          "One opening = one time fee",
          "Profile definition based on company needs",
          "Job description creation",
          "Salary Intelligence per role and market",
          "2-3 days to receive a shortlist",
          "3 months candidate replacement guarantee",
          "Support during the interviews",
          "Slack Updates",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Subscription RAAS Pro",
    // pricing: "€ 4,999",
    image: IMAGES.jovial,
    paymentLink: "https://buy.stripe.com/fZe8zY7Hn3cV5a07st",
    incentives: [
      {
        heading: "What do you get?",
        items: [
          "Two role requests at a time = Uncapped requests",
          "Unlimited recruiting requests",
          "Embedded hiring",
          "Salary Intelligence per role and market",
          "Ready to hire shortlist",
          "3 months candidate replacement guarantee",
          "Priority Support",
          "Slack Updates",
          "+ other benefits offered in basic tier",
        ],
      },
    ],
  },
];

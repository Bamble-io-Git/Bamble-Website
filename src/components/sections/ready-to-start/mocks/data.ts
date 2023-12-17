import { IMAGES } from "@/app/theme/images/images";

export const CARDS = [
  {
    id: 0,
    title: "RAAS Basic",
    pricing: "€ 1,000",
    image: IMAGES.colleague,
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
    pricing: "€ 2,500",
    image: IMAGES.jovial,
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

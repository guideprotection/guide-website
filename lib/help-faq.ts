export type FaqEntry = {
  question: string;
  answer: string;
};

/** FAQ content ported from guide-v51/help.html for FAQPage JSON-LD. */
export const HELP_FAQ: FaqEntry[] = [
  {
    question: "How do I file a claim?",
    answer:
      "Go to claims.guideprotection.com, or use the claim link on the store's own site. It takes about a minute and you do not need an account. If the store has its own branded claim page, that link works too and reaches the same place.",
  },
  {
    question: "What does protection cover?",
    answer:
      "Orders lost, stolen or damaged in transit. Guide replaces the order or refunds it, depending on what you would rather have and what the store stocks.",
  },
  {
    question: "Who am I dealing with, the store or Guide?",
    answer:
      "Both. You are the store's customer. Guide handles the delivery problem on their behalf, which is why the emails come from them and the resolution comes from us.",
  },
  {
    question: "What does Guide add to my store?",
    answer:
      "A protection product in your catalogue, so the fee can be charged when a shopper accepts the offer, and the offer itself in the cart or at checkout. Our team does the install with you rather than handing you a snippet.",
  },
  {
    question: "Can I file a claim for a customer?",
    answer:
      "Yes. Open the order in the Guide app, under Insights, and file on their behalf. Useful when someone emails you instead of using the claim form, which will happen.",
  },
  {
    question: "Can I put claims on my own brand and my own URL?",
    answer:
      "Yes. The Branding page in the Guide app controls how the claim form looks, and Settings lets you generate a claim URL of your own rather than sending customers to a Guide-branded one. Most merchants do this, and it is the difference between a customer feeling handed off and a customer feeling looked after.",
  },
  {
    question: "Does Guide work with my theme and my other apps?",
    answer:
      "Almost always. Where it does not, it is usually a cart drawer doing something unusual, and it is a fix rather than a blocker. Email hello@guideprotection.com and we will take a look at your store rather than asking you to describe it.",
  },
  {
    question: "What does it cost a shopper?",
    answer:
      "Guide sets the price. It is a small flat fee on low-value carts and a percentage of the cart on higher-value ones. The exact rate depends on your catalogue and is confirmed before you launch, so ask during the demo rather than working from a number on a page.",
  },
  {
    question: "Guide is free for merchants. So why is there a Guide charge on my Shopify statement?",
    answer:
      "This is the question we get most often after install, and the charge is real. Shopify's checkout is closed, so the money from a single order cannot be split between two parties at the point of sale. When a shopper adds protection, that fee is paid to you along with the rest of the order. It is sitting in your account, not ours. We then reclaim exactly that amount through a Shopify app usage charge. The figure on your statement is the total of the protection fees your shoppers paid, and nothing else. Money you were never entitled to keep, going back out. Guide is still free to you. No platform fee, no per-order fee, no subscription. The statement line looks like a cost because of how Shopify moves money, not because you are being charged for the software.",
  },
  {
    question: "How do I check the charge is right?",
    answer:
      "Compare the usage charge against protection revenue for the same period in the Guide dashboard. They should match. If they do not, tell us, because that is a bug worth knowing about rather than an argument worth having.",
  },
];

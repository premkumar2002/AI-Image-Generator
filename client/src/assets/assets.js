import logo from "./logo.svg";
import logo_icon from "./logo_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import star_icon from "./star_icon.svg";
import rating_star from "./rating_star.svg";
import sample_img_1 from "./sample_img_1.png";
import sample_img_2 from "./sample_img_2.png";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";
import star_group from "./star_group.png";
import credit_star from "./credit_star.svg";
import profile_icon from "./profile_icon.png";

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
};

export const stepsData = [
  {
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon: step_icon_1,
  },
  {
    title: "Watch the Magic",
    description:
      "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    icon: step_icon_2,
  },
  {
    title: "Download & Share",
    description:
      "Instantly download your creation or share it with the world directly from our platform.",
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: "Donald Jackman",
    role: "Graphic Designer",
    stars: 5,
    text: `I've been using bg.removal for nearly two years for my graphic design projects. It's incredibly user-friendly and has significantly streamlined my workflow.`,
  },
  {
    image: profile_img_2,
    name: "Richard Nelson",
    role: "Content Creator",
    stars: 3,
    text: `As a content creator, bg.removal has been a game-changer for me. The ease of use allows me to focus more on creativity rather than technicalities. Highly recommend it!`,
  },
  {
    image: profile_img_1,
    name: "Emily Carter",
    role: "Social Media Manager",
    stars: 4,
    text: `bg.removal has transformed the way I handle images for social media. The interface is intuitive, and the results are always impressive!`,
  },
];

export const plans = [
  {
    name: "Basic",
    description: "Best for personal use",
    price: {
      monthly: 10,
      annually: 100,
    },
    credits: 100,
    features: [
      "100 AI-generated images",
      "Basic editing tools",
      "Email support",
    ],
  },
  {
    name: "Advanced",
    description: "Best for business use",
    price: {
      monthly: 50,
      annually: 500,
    },
    credits: 500,
    features: [
      "500 AI-generated images",
      "Advanced editing tools",
      "Priority email support",
      "API access",
    ],
  },
  {
    name: "Business",
    description: "Best for Enterprise use",
    price: {
      monthly: 250,
      annually: 2500,
    },
    credits: 5000,
    features: [
      "5000 AI-generated images",
      "Premium editing suite",
      "24/7 phone support",
      "Dedicated account manager",
      "Custom AI model training",
    ],
  },
];

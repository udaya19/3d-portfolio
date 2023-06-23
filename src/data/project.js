import student from "../assets/student-app.png";
import crowdfunding from "../assets/crowdfunding.png";
import social from "../assets/social-media.png";

const projects = [
  {
    title: "Student Management App",
    description:
      "Developed a student management app where college management can post job related content.This app also has a feature to search for faculty, know their free timings and cabin number",

    tags: [
      {
        name: "reactnative",
        color: "text-orange-400",
      },
      {
        name: "nodejs",
        color: "text-white",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
    ],
    image: student,
    source_code_link: "https://github.com/udaya19/major-project-frontend",
  },
  {
    title: "Social Media Website",
    description:
      "Basic social media website where users can post an image, comment a post, and follow/unfollow users. ",

    tags: [
      {
        name: "react",
        color: "text-orange-400",
      },
      {
        name: "nodejs",
        color: "text-white",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
    ],
    image: social,
    source_code_link: "https://github.com/udaya19/MERN-social",
  },
  {
    title: "Crowdfunding Dapp",
    description:
      "This is a decentralized crowdfunding website built on top of blockchain. Anyone who needs funds for treatment or to build a startup can raise campaigns in this portal. Other users can donate to their campaign in ETH. ",

    tags: [
      {
        name: "react",
        color: "text-orange-400",
      },
      {
        name: "solidity",
        color: "text-white",
      },
      {
        name: "web3js",
        color: "text-green-400",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/udaya19/crowdfunding-dapp-react-web3",
  },
];

export default projects;

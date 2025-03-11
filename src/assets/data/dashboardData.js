import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Vector3 from "../img/Vector3.png";
import extra from "../img/extra.png"

const dashboardData = {
  heading: "Follow the",
  heading1: "Money",
  subHeading: "Dodge the",
  subHeading1: "Scams",
  description:
    "Track the smartest traders, expose scams, and rank the most trusted influencers. Crypto transparency starts here!",
  buttons: [
    { text: "Get Started", style: "customeBGBlue text-white" },
    { text: "See How It Works", style: "border border-customeBGBlue text-white" },
  ],
  images: [
    { src: img1, alt: "Bitcoin Illustration" },
    { src: img2, alt: "Crypto Analysis" },
    { src: img3, alt: "Trading Insights" },
  ],
  vectors: [
    { src: Vector1, alt: "Vector1" },
    { src: Vector2, alt: "Vector2" },
    { src: Vector3, alt: "Vector3" },
  ],
  extraImage: extra, // Extra Image for top, bottom, left, right
};

export default dashboardData;   

import { desc, img } from "framer-motion/client";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "This here is the decription of the item and I am just writing whatever I want to write and you should know tha t and I want you to know that",
  },
  {
    id: 2,
    title: "Next.JS Commerce",
    img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "This here is the decription of the item and I am just writing whatever I want to write and you should know tha t and I want you to know that",
  },
  {
    id: 3,
    title: "Vanilla.js Commerce",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "This here is the decription of the item and I am just writing whatever I want to write and you should know tha t and I want you to know that",
  },
  {
    id: 4,
    title: "Music app",
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "This here is the decription of the item and I am just writing whatever I want to write and you should know tha t and I want you to know that",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

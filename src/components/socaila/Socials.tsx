import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { url: "https://github.com/txxasif", icon: <FaGithub /> },
  {
    url: "https://linkedin.com/in/md-amjad-hossain-0b35a7153",
    icon: <FaLinkedin />,
  },
];

const iconVariants = {
  hover: { scale: 1.2 },
};

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
          className="flex flex-col items-center "
        >
          <motion.div variants={iconVariants} className="text-3xl">
            {social.icon}
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;

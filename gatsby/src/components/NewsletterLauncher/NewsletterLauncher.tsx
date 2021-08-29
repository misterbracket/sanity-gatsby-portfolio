import { motion } from "framer-motion";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { VisuallyHidden } from "../ui-components";


const launcherVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.7, deplay: 0.2 },
  },
}


const Launcher = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 500px;
  font-weight: 600;
  font-size: var(--big);
  background-color: var(--white);
  padding: 0 24px 0 0;
  letter-spacing: 2.2px;
  box-shadow: var(--shd);
  border: none;
`;

const LogoWrapper = styled.div`
  background: var(--color-two-dark);
  padding: 8px;
  border-radius: 500px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsletterLauncher = ({ ...delegated }) => {
  return (
    <Launcher variants={launcherVariants}
      initial="hidden"
      animate="show" {...delegated}>
      <VisuallyHidden>Subscribe To the Newsletter</VisuallyHidden>
      <LogoWrapper>
        <AiOutlineMail
          aria-hidden
          color="var(--white)"
          title="Subscribe to Newsletter"
          size="30"
        />
      </LogoWrapper>
      Subscribe
    </Launcher>
  );
};

export default NewsletterLauncher;

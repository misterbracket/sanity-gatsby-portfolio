import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../hooks";
import useFadeIn from "../hooks/useFadeIn";
import { VisuallyHidden } from "../ui-components";
import { NewsLetterDialog } from "./components";

const Launcher = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 500px;
  font-size: var(--big);
  background-color: var(--white);
  padding: 0 24px 0 0;
  letter-spacing: 2.2px;
  box-shadow: var(--shd);
  border: none;
  cursor: pointer;
  position: relative;
`;

const LogoWrapper = styled.div`
  background: var(--color-one-dark);
  padding: 8px;
  border-radius: 500px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
  position: relative;
`;

const NewsLetterLauncher = ({ ...delegated }) => {
  const intersectionRef = React.useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);
  const prefersReducedMotion = usePrefersReducedMotion()
  return (
    <motion.div
      ref={intersectionRef}
      variants={fadeInVariants}
      initial={initial}
      animate={animate}
      {...delegated}
    >
      <NewsLetterDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Launcher
        whileHover={prefersReducedMotion ? "" : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? "" : { scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
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
    </motion.div >
  );
};

export default NewsLetterLauncher;

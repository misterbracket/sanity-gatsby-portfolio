import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
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

const NewsletterLauncher = ({ ...delegated }) => {
  const intersectionRef = React.useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);

  return (
    <motion.div
      ref={intersectionRef}
      variants={fadeInVariants}
      initial={initial}
      animate={animate}
      {...delegated}
    >
      <AnimatePresence>
        {isOpen && (
          <NewsLetterDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>

      <Launcher whileHover={{ scale: 1.02 }} onClick={() => setIsOpen(!isOpen)}>
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
    </motion.div>
  );
};

export default NewsletterLauncher;

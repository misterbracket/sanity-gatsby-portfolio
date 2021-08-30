import { motion } from "framer-motion";
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../../hooks";
import NewsLetterCTA from "../../NewsLetterCTA";
import { VisuallyHidden } from "../../ui-components";

const animationVariants = {
  inital: {
    y: 100,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const NewsLetterPopup = styled(motion.div)`
  position: absolute;
  bottom: 70px;
  right: 0;
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? "block" : "none")};
`;

const DialogWrapper = styled(motion.div)`
  position: relative;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  background: var(--white);
  box-shadow: var(--shd);
  margin: 8px;
`;
const NewsLetterDialogCloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
`;

type NewsLetterDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

function NewsLetterDialog({ isOpen, onClose }: NewsLetterDialogProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <NewsLetterPopup aria-label="Newsletter Subscribtion Box" isOpen={isOpen}>
      <DialogWrapper
        initial={"inital"}
        animate={isOpen ? "visible" : "inital"}
        variants={prefersReducedMotion ? undefined : animationVariants}
      >
        <NewsLetterDialogCloseButton onClick={() => onClose()}>
          <VisuallyHidden>Close Newsletter Subscription Popup</VisuallyHidden>
          <RiCloseCircleLine
            aria-hidden
            color="var(--color-gray-500)"
            title="Close Menu"
            size="25"
          />
        </NewsLetterDialogCloseButton>
        <NewsLetterCTA />
      </DialogWrapper>
    </NewsLetterPopup>
  );
}

export default NewsLetterDialog;

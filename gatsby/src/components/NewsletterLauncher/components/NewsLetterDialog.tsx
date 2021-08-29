
import React from "react";
import NewsLetterCTA from "../../NewsLetterCTA";
import { RiCloseCircleLine } from "react-icons/ri";
import { VisuallyHidden } from "../../ui-components";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../../hooks";
import { motion } from "framer-motion";


const animationVariants = {
  hidden: { opacity: 0, y: "10vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
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
   position: relative;;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  background: var(--white);
  box-shadow: var(--shd);
  margin: 8px;
`
const NewsLetterDialogCloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  `

type NewsLetterDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};



function NewsLetterDialog({ isOpen, onClose }: NewsLetterDialogProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <NewsLetterPopup
      aria-label="Newsletter Subscribtion Box"
      isOpen={isOpen}
    >
      <DialogWrapper initial="hidden" animate="visible" variants={prefersReducedMotion && animationVariants}>


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

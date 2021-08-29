
import React from "react";
import { Dialog } from "@reach/dialog";
import NewsLetterCTA from "../../NewsLetterCTA";
import { AiOutlineClose } from "react-icons/ai";
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


const DialogWrapper = styled(motion.div)`
  position: absolute;
`

type NewsLetterDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewsLetterDialogCloseButton = styled.button``


function NewsLetterDialog({ isOpen, onClose }: NewsLetterDialogProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <DialogWrapper variants={animationVariants}>
      <Dialog
        aria-label="Mobile Menu"
        isOpen={isOpen}
        onDismiss={() => onClose()}
      >

        <NewsLetterDialogCloseButton onClick={() => onClose()}>
          <VisuallyHidden>Close Menu</VisuallyHidden>
          <AiOutlineClose
            aria-hidden
            color="var(--color-two)"
            title="Close Menu"
            size="35"
          />
        </NewsLetterDialogCloseButton>
        <NewsLetterCTA />
      </Dialog>
    </DialogWrapper>
  );
}

export default NewsLetterDialog;

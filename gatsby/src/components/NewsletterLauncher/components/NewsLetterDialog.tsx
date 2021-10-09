import { DialogContent, DialogOverlay } from "@reach/dialog";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../../hooks";
import NewsLetterCTA from "../../NewsLetterCTA";
import { VisuallyHidden } from "../../ui-components";

const animationVariants = {
  inital: {
    y: 100,
    opacity: 0,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    display: "block",
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const NewsLetterPopup = styled(DialogOverlay)`
  position: absolute;
  bottom: 160px;
  right: 8px;
  width: 360px;
  @media ${(props) => props.theme.queries.tabletAndUp} {
    width: 400px;
  }
`;

const DialogWrapper = styled(motion.div)`
  position: relative;
  padding: 36px 36px 46px;
  background: var(--white);
  box-shadow: var(--shd);
  margin: 8px;
  background: var(--color-one-light);
`;
const NewsLetterDialogCloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 27px;
`;

type NewsLetterDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

function NewsLetterDialog({ isOpen, onClose }: NewsLetterDialogProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const MotionDialogContent = motion(DialogContent);

  return (
    <AnimatePresence>
      {isOpen && (
        <NewsLetterPopup onDismiss={onClose} isOpen={isOpen}>
          <MotionDialogContent
            initial={"inital"}
            animate={isOpen ? "visible" : "inital"}
            variants={prefersReducedMotion ? undefined : animationVariants}
            aria-label="Newsletter Subscribtion Box"
            exit={{
              y: 100,
              opacity: 0,
              transition: {
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <DialogWrapper>
              <h3>Psst! Do You Want to Be Part of Something Cool</h3>
              <p>I am creating a newsletter about my journey as a developer. I will be sharing cool some ideas and thoughts. I would love to keep in touch with you.</p>
              <NewsLetterDialogCloseButton onClick={() => onClose()}>
                <VisuallyHidden>
                  Close Newsletter Subscription Popup
                </VisuallyHidden>
                <RiCloseCircleLine
                  aria-hidden
                  color="var(--color-gray-900)"
                  title="Close Menu"
                  size="35"
                />
              </NewsLetterDialogCloseButton>
              <NewsLetterCTA />
            </DialogWrapper>
          </MotionDialogContent>
        </NewsLetterPopup>
      )}
    </AnimatePresence>
  );
}

export default NewsLetterDialog;

import React, { ReactNode } from "react";
import styled from "styled-components"


const HiddenStyles = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1;
  width: 1;
  margin: -1;
  padding: 0;
  border: 0;
 `

const VisuallyHidden = ({
  children,
  ...delegated
}: {
  children: ReactNode;
}) => {
  const [forceShow, setForceShow] = React.useState(false);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keydown", handleKeyUp);
      };
    }
  }, []);
  if (forceShow) {
    return <span>{children}</span>;
  }
  return (
    <HiddenStyles {...delegated}>
      {children}
    </HiddenStyles>
  );
};
export default VisuallyHidden;

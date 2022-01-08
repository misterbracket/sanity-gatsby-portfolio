import { motion } from "framer-motion";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import styled from "styled-components";
import { PersonProps } from "../../pages";
import { usePrefersReducedMotion } from "../hooks";
import { Button } from "../ui-components";

const ProfileCardStyles = styled(motion.div)`
  display: grid;
  grid-template: 1fr auto / 1fr;
  margin: 3rem auto;
  background: var(--color-one-light);
  box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, 0.6));
  width: 370px;
  max-width: 370px;
  align-self: center;
  opacity: 0;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    position: relative;
    max-height: 500px;
    margin: auto 0;
    justify-self: end;
    right: -8rem;
  }
`;

const ProfileImage = styled(GatsbyImage)`
  height: 23rem;
  width: 23rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h2`
  text-decoration: none;
  font-weight: 900;
  font-size: var(--big);
  max-width: 250px;
`;

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center center;
  padding: 5rem 1rem 4rem;
`;

const HorizontalRuler = styled.hr`
  width: 10rem;
  background-color: var(--color-two);
  height: 2px;
  margin: 5px 0 15px 0;
`;
const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 270px;
  gap: 1rem;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const ProfileSlug = styled.span`
  display: none;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: inline;
    font-size: 2rem;
    letter-spacing: 0.15rem;
    text-align: center;
    padding: 0 2rem;
  }
`;

const SocialLinksListStyles = styled.ul`
  background: var(--white);
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  bottom: 1rem;
  gap: 2rem;
`;

const SocialLinkItem = styled.li`
  list-style: none;
`;

const SocialLink = styled.a`
  width: 30px;
  height: 30px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type ProfileCardProps = {
  person: PersonProps;
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const ProfileCard = ({ person }: ProfileCardProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <ProfileCardStyles
      variants={fadeInVariants}
      initial={prefersReducedMotion ? "" : "hidden"}
      animate={"visible"}
    >
      <CardStyles>
        <ProfileImage
          alt={person.image.alt}
          image={person.image.asset.gatsbyImageData}
        />
        <Name>{person.name}</Name>
        <HorizontalRuler />
        <ProfileSlug>{person.profileslug}</ProfileSlug>
        <ButtonGroup>
          <Button color="dark">
            <Link to="/resume">Resume</Link>
          </Button>
          <Button color="light">
            <Link to="/projects">Projects</Link>
          </Button>
        </ButtonGroup>
      </CardStyles>
      <SocialLinksListStyles>
        <SocialLinkItem>
          <SocialLink href="http://at.linkedin.com/in/maximilian-klammer-97bab592">
            <AiFillLinkedin
              color={"black"}
              title={"Go to Linkedin Profile"}
              size={"35"}
            />
          </SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink href="https://twitter.com/maxklammer">
            <AiFillTwitterSquare
              color={"black"}
              title={"Go to Twitter Profile"}
              size={"35"}
            />
          </SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink href="https://github.com/misterbracket">
            <AiFillGithub
              color={"black"}
              title={"Go to Github Profile"}
              size={"35"}
            />
          </SocialLink>
        </SocialLinkItem>
      </SocialLinksListStyles>
    </ProfileCardStyles>
  );
};

export default ProfileCard;

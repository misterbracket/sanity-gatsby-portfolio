import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { useMedia, usePrefersReducedMotion } from "./../components/hooks";
import { Button, Sparkles } from "../components/ui-components";
import { motion } from "framer-motion";

const AboutMeStyles = styled(motion.div)`
  --margin-top: 150px;
  margin-top: var(--margin-top);
  background: var(--dark-pink);
  width: 100%;
  display: flex;
  place-items: center;
  flex-direction: column;

  @media screen and (min-width: 840px) {
    position: static;
    margin: 0;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  top: -150px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 840px) {
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template: auto / 45% 55%;
    position: static;
    width: 100%;
    height: 100%;
  }
`;

const TextSection = styled.section`
  padding: 3rem 3rem;

  @media screen and (min-width: 840px) {
    background-color: var(--white);
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;
    padding-right: 7rem;
  }
`;

const ContentWrapper = styled.div`
  @media screen and (min-width: 840px) {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: var(--white);
    max-height: 500px;
    overflow-y: scroll;
  }
`;

const HeroTitle = styled.h1`
  font-size: var(--very-very-big);
  font-weight: 700;
  @media screen and (min-width: 840px) {
    font-size: var(--super-big);
    font-weight: 700;
    margin: 50px 0 0 0;
  }
`;

const Subheading = styled.h3`
  font-weight: 500;
  margin: 1rem 0 1.38rem;
  @media screen and (min-width: 840px) {
    font-weight: 400;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 250px;
  gap: 1rem;
`;
export interface PersonProps {
  name: string;
  profileslug: string;
  profiletitle: string;
  profilesubheading: string;
  bio: string;
  alt: string;
  image: {};
}

interface AboutMePageProps {
  data: {
    sanityPerson: PersonProps;
  };
}

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: 0.2, damping: 2 },
  },
};

const index = ({ location, data }: PageProps & AboutMePageProps) => {
  const isWide = useMedia("(min-width: 840px)");
  const prefersReducedMotion = usePrefersReducedMotion();

  const person = data.sanityPerson;

  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <AboutMeStyles
        variants={prefersReducedMotion ? null : animationVariants}
        initial="hidden"
        animate="visible"
      >
        <MainWrapper>
          <ProfileCard person={person}></ProfileCard>
          <TextSection>
            <ContentWrapper>
              <Sparkles>
                <HeroTitle>{person.profiletitle}</HeroTitle>
              </Sparkles>
              <Subheading>{person.profilesubheading}</Subheading>
              {isWide && (
                <ButtonGroup>
                  <Button type="button" color="dark">
                    <Link className="link" to="/resume">
                      Resume
                    </Link>
                  </Button>
                  <Button type="button" color="light">
                    <Link className="link" to="/projects">
                      Projects
                    </Link>
                  </Button>
                </ButtonGroup>
              )}
              <p>{person.bio}</p>
            </ContentWrapper>
          </TextSection>
        </MainWrapper>
      </AboutMeStyles>
    </>
  );
};

export const query = graphql`
  query maxQuery {
    sanityPerson(name: { regex: "/max/i" }) {
      name
      bio
      profileslug
      profiletitle
      profilesubheading
      image {
        ...ImageWithPreview
        alt
      }
    }
  }
`;
export default index;

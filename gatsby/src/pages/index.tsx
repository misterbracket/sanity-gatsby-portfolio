import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Button, Sparkles } from "../components/ui-components";
import { motion } from "framer-motion";

const AboutMeStyles = styled.div`
  --margin-top: 150px;
  margin-top: var(--margin-top);
  background: var(--color-one);
  width: 100%;
  display: flex;
  place-items: center;
  flex-direction: column;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    position: static;
    margin: 0;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  top: -150px;
  padding-left: 20px;
  padding-right: 20px;
  @media ${(props) => props.theme.queries.laptopAndUp} {
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
  max-width: 60rem;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    background-color: var(--white);
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;
    padding-right: 7rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      deplay: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.7, deplay: 0.2 },
  },
};

const ContentWrapper = styled(motion.div)`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    padding-left: 1rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: var(--white);
    max-height: 500px;
    overflow-y: scroll;
    padding-left: 10px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: var(--very-very-big);
  font-weight: 700;
  margin-bottom: 0px;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    font-size: var(--super-big);
    font-weight: 700;
    margin: 50px 0 0 0;
  }
`;

const Subheading = styled(motion.h3)`
  font-weight: 500;
  margin: 1rem 0 1.38rem;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    font-weight: 400;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: none;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;
    gap: 1rem;
  }
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

const index = ({ location, data }: PageProps & AboutMePageProps) => {
  const person = data.sanityPerson;

  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <AboutMeStyles>
        <MainWrapper>
          <ProfileCard person={person}></ProfileCard>
          <TextSection>
            <ContentWrapper
              variants={container}
              initial="hidden"
              animate="show"
            >
              <Sparkles>
                <HeroTitle variants={item}>{person.profiletitle}</HeroTitle>
              </Sparkles>
              <Subheading variants={item}>
                {person.profilesubheading}
              </Subheading>
              <ButtonGroup variants={item}>
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
              <motion.p variants={item}>{person.bio}</motion.p>
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

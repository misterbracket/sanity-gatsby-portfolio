import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { useMedia } from "react-use";
import { Button } from "../components/ui-components";

const AboutMeStyles = styled.main`
  --margin-top: 150px;
  margin-top: var(--margin-top);
  background: var(--dark-pink);
  width: 100%;
  display: flex;
  place-items: center;
  flex-direction: column;

  .container {
    position: relative;
    top: -150px;
    @media screen and (min-width: 840px) {
      display: grid;
      grid-template: auto / 45% 55%;
      position: static;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 840px) {
    position: static;
    margin: 0;
  }
`;
const ContentStyles = styled.section`
  padding: 3rem 3rem;
  .subheading {
    font-weight: 300;
  }

  @media screen and (min-width: 840px) {
    background-color: var(--white);
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;
    padding-right: 7rem;

    .content-wrapper {
      background-color: var(--white);
      max-height: 500px;
      overflow: scroll;
    }
    .subheading {
      font-weight: 400;
    }
    h1 {
      font-size: var(--super-big);
      margin: 0;
      line-height: normal;
      font-weight: 700;
    }
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }
  .btn-group {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 270px;
    gap: 1rem;
  }
`;

const index = ({ location, data }: PageProps) => {
  const isWide = useMedia("(min-width: 840px)");

  const person = data.sanityPerson;
  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <AboutMeStyles>
        <div className="container">
          <ProfileCard person={person}></ProfileCard>
          <ContentStyles>
            <div className="content-wrapper">
              <h1>{person.profiletitle}</h1>
              <h3 className="subheading">{person.profilesubheading}</h3>
              {isWide && (
                <div className="btn-group">
                  <Button color="dark">
                    <Link className="link" to="/resume">
                      Resume
                    </Link>
                  </Button>
                  <Button color="light">
                    <Link className="link" to="/projects">
                      Projects
                    </Link>
                  </Button>
                </div>
              )}
              <p>{person.bio}</p>
            </div>
          </ContentStyles>
        </div>
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
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
export default index;

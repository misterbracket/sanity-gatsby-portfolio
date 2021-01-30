import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const AboutMeStyles = styled.main`
  --margin-top: 270px;
  margin-top: var(--margin-top);
  background: var(--dark-pink);
  width: 100%;
  display: flex;
  place-items: center;
  flex-direction: column;

  .container {
    position: relative;
    top: -150px;
  }
`;
const ContentStyles = styled.section`
  padding: 3rem 3rem;
  .subheading {
    font-weight: 300;
  }
`;

const index = ({ location, data }: PageProps) => {
  const person = data.sanityPerson;
  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <AboutMeStyles>
        <div className="container">
          <ProfileCard person={person}></ProfileCard>
          <ContentStyles>
            <h1>HELLO</h1>
            <h3 className="subheading">Here's who I am am & what I do</h3>
            <p>{person.bio}</p>
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

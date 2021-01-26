import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { type } from "os";

type aboutMePageData = {
  sanityPerson: {
    name: String;
    bio: String;
  };
};

const AboutMeStyles = styled.main`
  .about-me {
    margin-top: 165px;
    background: var(--dark-pink);
  }
  .subheading {
    font-weight: lighter;
  }
`;

const index = ({ location, data }: PageProps) => {
  const person = data.sanityPerson;
  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <AboutMeStyles>
        <section className="about-me">
          <h1>HELLO</h1>
          <h3 className="subheading">Here's who I am am & what I do</h3>
          <p>{person.bio}</p>
        </section>
      </AboutMeStyles>
    </>
  );
};

export const query = graphql`
  query MaxQuery {
    sanityPerson(name: { regex: "/max/i" }) {
      name
      bio
    }
  }
`;

export default index;

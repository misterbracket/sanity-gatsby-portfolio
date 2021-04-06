import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { Link } from "gatsby";
import { Button } from "../ui-components";
import { useMedia } from "./../utils";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const ProfileCardStyles = styled.div`
  display: grid;
  grid-template: 1fr auto / 1fr;
  margin: 3rem auto;
  background: var(--light-pink);
  box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, 0.6));
  max-width: 370px;
  align-self: center;
  @media screen and (min-width: 840px) {
    position: relative;
    max-height: 500px;
    margin: auto 0;
    justify-self: end;
    right: -8rem;
  }
`;

const ProfileImage = styled.div`
  height: 18rem;
  width: 18rem;
  img {
    height: auto;
    width: 100%;
    border-radius: 50%;
  }
`;
const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center center;
  padding: 5rem 1rem 4rem;

  .name {
    text-decoration: none;
    font-weight: 900;
    font-size: var(--big);
    max-width: 250px;
  }
  hr {
    width: 10rem;
    background-color: var(--blue);
    height: 2px;
  }
  .btn-group {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 270px;
    gap: 1rem;
  }
  .profile-slug {
    letter-spacing: 0.2em;
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

const SocialLink = styled.li`
  list-style: none;
  a {
    width: 30px;
    height: 30px;
    margin: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    a {
      color: orange;
    }
  }
`;

type ProfileCardProps = {
  person: {
    name: string;
    profileslug: string;
    image: {
      [x: string]: any;
      asset: any;
      hotspot: any;
      crop: any;
      width: any;
      height: any;
      options?: {} | undefined;
      config?: {} | undefined;
      __typename: any;
      _type: any;
      _key: any;
      sources: any;
    };
  };
};

const ProfileCard = ({ person }: ProfileCardProps) => {
  const isWide = useMedia("(min-width: 840px)");
  return (
    <ProfileCardStyles>
      <CardStyles>
        <ProfileImage>
          <SanityImage {...person.image} />
        </ProfileImage>
        <h2 className="name center">{person.name}</h2>
        <hr />
        {isWide ? (
          <span className="profile-slug center">{person.profileslug}</span>
        ) : (
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
      </CardStyles>
      <SocialLinksListStyles>
        <SocialLink>
          <a href="http://at.linkedin.com/in/maximilian-klammer-97bab592">
            <AiFillLinkedin
              color={"black"}
              title={"Go to Linkedin Profile"}
              size={"35"}
            />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://twitter.com/maxklammer">
            <AiFillTwitterSquare
              color={"black"}
              title={"Go to Linkedin Profile"}
              size={"35"}
            />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://github.com/misterbracket">
            <AiFillGithub
              color={"black"}
              title={"Go to Linkedin Profile"}
              size={"35"}
            />
          </a>
        </SocialLink>
      </SocialLinksListStyles>
    </ProfileCardStyles>
  );
};

export default ProfileCard;

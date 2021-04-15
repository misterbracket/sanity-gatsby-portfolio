import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { Link } from "gatsby";
import { Button } from "../ui-components";
import { useMedia } from "./../hooks";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { PersonProps } from "../../pages";

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

const ProfileImage = styled(SanityImage)`
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
  background-color: var(--blue);
  height: 2px;
  margin-top: 5px 0 15px 0;
`;
const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 270px;
  gap: 1rem;
`;

const ProfileSlug = styled.span`
  letter-spacing: 0.2rem;
  text-align: center;
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

const ProfileCard = ({ person }: ProfileCardProps) => {
  const isWide = useMedia("(min-width: 840px)");
  return (
    <ProfileCardStyles>
      <CardStyles>
        <ProfileImage alt={person.alt} {...person.image} />
        <Name>{person.name}</Name>
        <HorizontalRuler />
        {isWide ? (
          <ProfileSlug>{person.profileslug}</ProfileSlug>
        ) : (
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
              title={"Go to Linkedin Profile"}
              size={"35"}
            />
          </SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink href="https://github.com/misterbracket">
            <AiFillGithub
              color={"black"}
              title={"Go to Linkedin Profile"}
              size={"35"}
            />
          </SocialLink>
        </SocialLinkItem>
      </SocialLinksListStyles>
    </ProfileCardStyles>
  );
};

export default ProfileCard;

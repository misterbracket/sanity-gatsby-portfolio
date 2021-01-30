import React from "react";
import Img from "gatsby-image";
import { AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "gatsby";
import { Button } from "../Button";

const ProfileCardStyles = styled.div`
  display: grid;
  grid-template: 1fr auto / 1fr;
  margin: 3rem 2rem;
  background: var(--light-pink);
  box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, 0.6));
  max-width: 370px;
`;
const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center center;
  padding: 5rem 1rem 4rem;
  .profile-img {
    img {
      height: auto;
      max-width: 100%;
    }
    border-radius: 50%;
    height: 15rem;
    width: 15rem;
  }
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
`;
const SocialLinksStyles = styled.div`
  background: var(--white);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  bottom: 1rem;
  .linkedin-link {
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
  person: { name: string; image: { asset: { fluid: any } } };
};

const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <ProfileCardStyles>
      <CardStyles>
        <Img
          className="profile-img"
          fluid={person.image.asset.fluid}
          alt={person.name}
        />
        <h2 className="name center">{person.name}</h2>
        <hr />
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
      </CardStyles>
      <SocialLinksStyles>
        <Link
          className="linkedin-link"
          to="http://at.linkedin.com/in/maximilian-klammer-97bab592"
        >
          <AiFillLinkedin
            color={"black"}
            title={"Go to Linkedin Profile"}
            size={"35"}
          />
        </Link>
      </SocialLinksStyles>
    </ProfileCardStyles>
  );
};

export default ProfileCard;

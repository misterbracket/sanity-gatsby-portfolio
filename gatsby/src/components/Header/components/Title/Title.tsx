import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const TitleStyles = styled.div`
  grid-area: title;
  text-align: left;
  padding: 1rem 3rem;
  .title {
    line-height: 2.5rem;
  }
  .blueDot {
    display: inline-block;
    background: var(--blue);
    width: 16px;
    height: 16px;
  }
  .name {
    position: relative;
    left: 20px;
    text-decoration: none;
    font-weight: 900;
    font-size: 2rem;
  }
  .slug {
    margin-top: 0rem;
  }
  .slug p {
    font-size: 1.4rem;
    text-transform: uppercase;
    line-height: 0.8rem;
  }
`;

const Title = () => {
  return (
    <TitleStyles>
      <div>
        <h1 className="title">
          <div className="blueDot"></div>
          <Link className="name" to="/">
            Max Klammer
          </Link>
        </h1>
      </div>
      <div className="slug">
        <p>Web Dev and Tech Enthusiast</p>
      </div>
    </TitleStyles>
  );
};

export default Title;

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const TitleStyles = styled.div`
  grid-area: title;
  text-align: left;
  padding: 1rem 3rem;
  .title {
    margin-bottom: 0;
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
    font-size: var(--big);
    white-space: nowrap;
  }
  .slug {
    margin-top: 0rem;
  }
  .slug p {
    font-size: 1.4rem;
    text-transform: uppercase;
    white-space: nowrap;
    margin: 0;
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
        <p>Web Developer by Passion</p>
      </div>
    </TitleStyles>
  );
};

export default Title;

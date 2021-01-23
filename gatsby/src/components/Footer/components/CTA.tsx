import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
  display: flex;

  flex-wrap: wrap;
  /* --label-width: 35px; */
  .item {
    flex-basis: 150px;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    min-height: 70px;
    h5 {
      margin: 0 2rem 0 0;
      width: 35px;
    }
    p {
      margin-top: 0;
      margin-bottom: 0;
      font-size: var(--small);
      width: 200px;
    }
  }
`;

const CTA = ({}) => {
  return (
    <FooterStyles>
      <div className="item">
        <h5>Call</h5>
        <p>🇲🇹 +356 7903 4344</p>
      </div>
      <div className="item">
        <h5>Write</h5>
        <p>
          <a href="mailto:maximilian.klammer@gmail.com">
            maximilian.klammer@gmail.com
          </a>
        </p>
      </div>
    </FooterStyles>
  );
};

export default CTA;

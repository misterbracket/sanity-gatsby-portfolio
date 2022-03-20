import React from "react";
import styled from "styled-components";

const capitalize = (s: string) => s.replace(/^\w/, (c) => c.toUpperCase());
const pluralize = (s: string) => s + "s";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 0 auto;
  box-shadow: var(--shd);
`;
const FilterButton = styled.button<{ active: boolean }>`
  background: ${(props) =>
    props.active ? "var(--color-two-light)" : "var(--color-two)"};
  color: var(--white);
  border: 1px solid var(--color-two-dark);
  padding: 2rem 1.5rem;
  font-size: var(--big);
  font-weight: ${(props) => (props.active ? 700 : 500)};
  width: 150px;
  text-decoration: {({active} => active ? 'underline' : 'none')};


  box-shadow: ${(props) =>
    props.active ? "inset 0px 0px 5px #675f5f" : "none"};


  &:hover,
  &:focus {
    background: var(--color-two-light);
    font-weight: 700;
    text-decoration: underline;
  }
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
`;

const FilterButtons = ({
  activeFilter,
  filter,
  setFilter,
}: {
  activeFilter: string;
  filter: Array<string>;
  setFilter: (x: string) => void;
}) => {
  return (
    <section>
      <FilterWrapper>
        {filter.map((type) => (
          <FilterButton
            key={type}
            active={activeFilter === type}
            onClick={() => setFilter(type)}
          >
            {capitalize(pluralize(type))}
          </FilterButton>
        ))}
      </FilterWrapper>
    </section>
  );
};

export default FilterButtons;

import React from "react";
import styled from "styled-components";

const capitalize = (s: string) => s.replace(/^\w/, (c) => c.toUpperCase());
const pluralize = (s: string) => s + "s";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 0 auto;
`;
const FilterButton = styled.button`
  padding: 1.5rem;
  background: var(--color-two);
  color: var(--white);
  border: 1px solid var(--color-two-dark);
  padding: 0.6rem 3rem;
  font-size: var(--big);
  font-weight: 700;

  &:hover,
  &:focus {
    background: var(--color-two-light);
  }
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
`;

const FilterButtons = ({
  filter,
  setFilter,
}: {
  filter: Array<string>;
  setFilter: (x: string) => void;
}) => {
  return (
    <section>
      <FilterWrapper>
        {filter.map((type) => (
          <FilterButton onClick={() => setFilter(type)}>
            {capitalize(pluralize(type))}
          </FilterButton>
        ))}
      </FilterWrapper>
    </section>
  );
};

export default FilterButtons;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  p {
    width: clamp(280px, 80%, 600px);
  }
`;

export const SearchMusic = styled.div`
  margin: 0 auto;
  display: flex;
  width: clamp(220px, 100%, 600px);
  margin-top: 20px;

  input {
    border-radius: 0;
  }

  select {
    background-color: var(--orange);
    border: 1px solid var(--orange);
    color: var(--white);
    font-size: 1rem;
    width: 100px;
  }

  @media (max-width: 890px) {
    width: clamp(220px, 90%, 600px);
  }
`;

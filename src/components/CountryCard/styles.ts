import styled from "styled-components";

export const Card = styled.div`
  width: auto;
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  color: inherit;
  background-color: rgba(255,255,255,0.8);
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #f09824;
    border-color: #f09824;
  }

  img {
    width: 340px;
    height: 238px;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
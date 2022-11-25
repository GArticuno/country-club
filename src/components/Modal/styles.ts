import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: white;
    width: 100%;
    max-width: 400px;
    height: auto;
    padding: 1.7rem 3.5rem;
    border: 3px solid #eaeaea;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    position: relative;
    text-align: center;

    img {
      width: 340px;
      height: 238px;
    }

    h2 {
      font-size: 2rem;
    }

    .grid-desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;

      h3, p {
        text-align: start;
      }

      p {
        margin:0.2rem;
      }
    }

    button {
      border: 0;
      outline: 0;

      cursor: pointer;
      position: absolute;

      right: 0.5rem;
      top: 0.5rem;

      background: transparent;
      color: black;
      font-size: 1rem;
      transition: color 0.2s;
      &:hover {
        color: rgb(243, 78, 78);
      }
    }
  }
`;

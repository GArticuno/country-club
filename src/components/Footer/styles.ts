import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,2555,255,0.8);

  .icon {
    color: rgb(243, 78, 78);
    font-size: 1.5rem;
    margin: 0 0.3rem;
  }

  p {
    font-family: Ubuntu, sans-serif;
    font-weight: 700;
    margin-left: 0.2rem;

    a {
      color: black;
      transition: color 0.2s;
      &:hover{
        color: rgb(243, 78, 78);
      }
    }
  }
`;

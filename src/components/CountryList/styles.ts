import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 0;
    outline: 0;
    border-radius: 5px;
    width: 15rem;
    height:1.7rem;
    font-size: 1.3rem;    
  }

  button {
    cursor: pointer;
    
    height:1.7rem;
    width: 2.3rem;
    margin: 0 0.5rem;

    border: 1px solid #eaeaea;
    outline: 0;
  
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 1.5rem;

    transition: color 0.3s ease, border-color 0.3s ease;

    &:hover {
        color: rgb(243, 78, 78);
        border-color: rgb(243, 78, 78);
    }

    .icon {
      text-align: center;
      
    }
  }
`;

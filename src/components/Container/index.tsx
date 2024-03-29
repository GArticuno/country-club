import { ContainerProps } from './types';
import { StyledContainer } from './styles';

export default function Container({children}: ContainerProps) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
};

import { MainContainer } from './styles';
import { MainProps } from './types';

export default function Main({children} : MainProps) {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

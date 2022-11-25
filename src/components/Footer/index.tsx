import {GoCode} from 'react-icons/go';

import { StyledFooter } from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <GoCode className='icon'/>
      <p>by <a href="https://github.com/GArticuno" target='_blank' rel="noreferrer">Garticuno</a>  2021</p>
    </StyledFooter>
  )
}

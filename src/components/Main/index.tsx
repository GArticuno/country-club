import React from 'react'
import styled from 'styled-components'

import { ChildrenProps } from '../../interfaces'

const MainS = styled.main`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Main({children} : ChildrenProps) {
  return (
    <MainS>
      {children}
    </MainS>
  )
}

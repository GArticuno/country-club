import React, {ReactNode} from 'react'
import styled from 'styled-components'

import { ChildrenProps } from '../../interfaces'

const ContainerS = styled.div`
  min-height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default function Container({children}: ChildrenProps) {
  return (
    <ContainerS>
      {children}
    </ContainerS>
  )
}

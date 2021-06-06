import {ReactNode} from 'react'

export interface ChildrenProps {
  children: ReactNode;
}

export interface Country {
  code: string;
  name: string;
  native: string;
  capital: string;
  currency: string;
  continent:{
    name: string;
  }
}

export interface Countries {
  countries : Country[];
}
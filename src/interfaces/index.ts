export type CountryProps = {
  code: string;
  name: string;
  native: string;
  capital: string;
  currency: string;
  continent:{
    name: string;
  };
  flag?: string;
};
export type ApolloDatProps = {
  countries : CountryProps[];
};

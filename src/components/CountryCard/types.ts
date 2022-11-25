import { CountryProps } from "../../interfaces";

export type CountryCardProps = {
  country: CountryProps;
  onClick: (country: CountryProps) => void;
};
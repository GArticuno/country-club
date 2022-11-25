import { useState } from "react";
import { Card } from "./styles";
import { CountryCardProps } from "./types";

const CountryCard = ({ country, onClick }: CountryCardProps) => {
  const [countryFlag, setCountryFlag] = useState(`https://www.sciencekids.co.nz/images/pictures/flags680/${country.name}.jpg`);

  const onError = () => {
    setCountryFlag(`/assets/unknow-flag.png`);
  };

  return (
    <Card key={country.code} onClick={() => onClick({ ...country, flag: countryFlag })}>
      <img
        src={countryFlag}
        alt={country.code}
        onError={onError}
      />
      <h3>{country.name}</h3>
      <h4>Capital: {country.capital}</h4>
    </Card>
  );
};

export default CountryCard;

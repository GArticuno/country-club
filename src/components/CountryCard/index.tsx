import { useEffect, useState } from "react";
import { Card } from "./styles";
import { CountryCardProps } from "./types";

const CountryCard = ({ country, onClick }: CountryCardProps) => {
  const [imgSrc, setImgSrc] = useState(country.flag)

  useEffect(() => {
    setImgSrc(country.flag)
  }, [country])

  return (
    <Card key={country.code} onClick={() => onClick({ ...country })}>
      <img
        src={imgSrc ? imgSrc : '/assets/unknow-flag.png'}
        alt={country.code}
        width={340}
        height={238}
        onError={() => {
          setImgSrc('/assets/unknow-flag.png')
        }}
      />
      <h3>{country.name}</h3>
      <h4>Capital: {country.capital}</h4>
    </Card>
  );
};

export default CountryCard;

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { gql } from "@apollo/client";

import client from "../client/apollo-client";

import Container from '../components/Container';
import Main from '../components/Main';
import CountryList from '../components/CountryList';
import Footer from '../components/Footer';

import { ApolloDatProps } from '../interfaces';

export default function Home({ countries } : ApolloDatProps) {
  return (
    <Container>
      <Head>
        <title>Country Club</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <CountryList countries={countries}/>
      </Main>
      <Footer/>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<ApolloDatProps>({
    query: gql`
      query Countries {
        countries {
          code
          name
          native
          capital
          currency
          continent{
            name
          }
        }
      }
    `,
  });

  const countriesWithFlag = data.countries.map(country => {
    return {
      ...country,
      flag: `https://www.sciencekids.co.nz/images/pictures/flags680/${country.name}.jpg`,
    };
  })

  return {
    props: {
      countries: countriesWithFlag,
    },
  };
}
/* eslint-disable jsx-a11y/alt-text */
import React, { Component} from 'react';
import {ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider} from '@apollo/client/react';
import {CList} from './CList.js';

const client = new ApolloClient({ 
  uri: 'https://countries-274616.ew.r.appspot.com/', cache: new InMemoryCache()});

class App extends Component{

  render(){
    return (
      <ApolloProvider client={client}>
        <CList/>
      </ApolloProvider>
    );
  }
}

export default App;

/* eslint-disable jsx-a11y/alt-text */
import React, { Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import Clist from './Clist';

const client = new ApolloClient({ uri: 'https://countries-274616.ew.r.appspot.com/' });

class App extends Component{

  render(){
    return (
      <ApolloProvider client={client}>
        <Clist/>
      </ApolloProvider>
    );
  }
}

export default App;

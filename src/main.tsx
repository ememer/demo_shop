import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ReactDOM from 'react-dom';

import App from './App';
import OrderContexProvider from './context/OrderContextProvider';
import client from './utils/apolloClient';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <OrderContexProvider>
        <App />
      </OrderContexProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

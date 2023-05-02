import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { createRoot } from 'react-dom/client';

import App from './App';
import OrderContexProvider from './context/OrderContextProvider';
import client from './utils/apolloClient';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <OrderContexProvider>
        <App />
      </OrderContexProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

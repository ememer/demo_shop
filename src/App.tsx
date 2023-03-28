import React from 'react';

import ItemsList from './components/ItemsList';
import Layout from './components/Layout';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

function App() {
  return (
    <div className="App clearfix">
      <Layout>
        <ItemsList />
      </Layout>
    </div>
  );
}

export default App;

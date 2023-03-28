import React from 'react';

import Layout from './components/Layout';
import MainPage from './components/MainPage';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
}

export default App;

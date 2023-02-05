import React from 'react';

import Layout from './components/Layout';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="container py-4 px-3 mx-auto">
          <h1>Hello, Bootstrap and Vite!</h1>
          <button className="btn bg-primary">Primary button</button>
        </div>
      </Layout>
    </div>
  );
}

export default App;

import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import MainPage from './components/MainPage';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

function App() {
  return (
    <div className="App clearfix bg-white">
      <AnimatePresence>
        <Layout>
          <MainPage />
        </Layout>
      </AnimatePresence>
    </div>
  );
}

export default App;

import { Layout } from './component/Layout/Layout';
import PageRoutes from './Routes/PageRoutes';
import './Translation/i18n';

import './App.css';

const App = () => {
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  );
};

export default App;

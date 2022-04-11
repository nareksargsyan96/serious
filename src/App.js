import "./App.css";
import Layout from "./component/Layout/Layout";
import PageRoutes from "./Routes/PageRoutes";
import "./Translation/i18n";

function App() {
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  );
}

export default App;

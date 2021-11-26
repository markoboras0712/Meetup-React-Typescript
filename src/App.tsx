import { Layout, MyRouter } from 'components';
import { autoLogin } from 'modules/auth';

export const App: React.FC = () => {
  autoLogin();
  return (
    <Layout>
      <MyRouter />
    </Layout>
  );
};

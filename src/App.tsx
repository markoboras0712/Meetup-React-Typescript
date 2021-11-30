import { Layout } from 'components';
import { Routing } from 'modules/routing';
import { autoLogin } from 'modules/auth';

export const App: React.FC = () => {
  autoLogin();
  return (
    <Layout>
      <Routing />
    </Layout>
  );
};

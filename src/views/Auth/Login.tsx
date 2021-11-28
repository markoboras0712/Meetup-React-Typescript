import { LoginForm } from 'modules/auth';
import { PublicAuthGuard } from 'modules/auth';

export const Login: React.FC = () => {
  return (
    <PublicAuthGuard>
      <section>
        <h1>Welcome</h1>
        <LoginForm />
      </section>
    </PublicAuthGuard>
  );
};

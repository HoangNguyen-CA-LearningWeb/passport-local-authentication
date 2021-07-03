import { Route, Switch } from 'react-router-dom';
import RegisterForm from './containers/AuthForms/RegisterForm/RegisterForm';
import LoginForm from './containers/AuthForms/LoginForm/LoginForm';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Switch>
      <Route path='/login' exact>
        <Layout>
          <LoginForm />
        </Layout>
      </Route>
      <Route path='/register' exact>
        <Layout>
          <RegisterForm />
        </Layout>
      </Route>
      <Route path='/'>
        <h1>Home Page</h1>
      </Route>
    </Switch>
  );
}

export default App;

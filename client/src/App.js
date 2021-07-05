import { useContext, useEffect } from 'react';
import { userContext } from './context/userContext';

import { Route, Switch } from 'react-router-dom';
import RegisterForm from './containers/AuthForms/RegisterForm/RegisterForm';
import LoginForm from './containers/AuthForms/LoginForm/LoginForm';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';

import { getUser } from './actions';

function App() {
  const { setUser } = useContext(userContext);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, [setUser]);
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
        <ProtectedRoute></ProtectedRoute>
      </Route>
    </Switch>
  );
}

export default App;

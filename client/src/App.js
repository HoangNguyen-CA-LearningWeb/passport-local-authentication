import { useContext, useEffect } from 'react';
import { userContext } from './context/userContext';

import { Route, Switch } from 'react-router-dom';
import RegisterForm from './containers/AuthForms/RegisterForm/RegisterForm';
import LoginForm from './containers/AuthForms/LoginForm/LoginForm';
import Layout from './components/Layout/Layout';
import AuthLayout from './containers/AuthForms/AuthLayout';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';
import Navbar from './containers/Navbar/Navbar';

import { getUser } from './actions';

function App() {
  const { setUser } = useContext(userContext);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) setUser(user);
    };
    fetchUser();
  }, [setUser]);

  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path='/login' exact>
          <AuthLayout header='Log In'>
            <LoginForm />
          </AuthLayout>
        </Route>
        <Route path='/register' exact>
          <AuthLayout header='Register'>
            <RegisterForm />
          </AuthLayout>
        </Route>
        <Route path='/'>
          <Layout>
            <ProtectedRoute />
          </Layout>
        </Route>
      </Switch>
    </>
  );
}

export default App;

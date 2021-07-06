import { useContext, useState } from 'react';
import styles from '../styles.module.css';
import { loginUser } from '../../../actions';
import { userContext } from '../../../context/userContext';
import { Redirect } from 'react-router-dom';

import { useForm } from 'react-hook-form';
const LoginForm = () => {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      username: '',
    },
  });

  const { user, setUser } = useContext(userContext);

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data.username, data.password);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  };

  let redirect = null;
  if (user) {
    redirect = <Redirect to='/'></Redirect>;
  }

  return (
    <>
      {redirect}
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <div className={styles.serverError}>{error}</div>}
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            {...register('username', {
              required: 'username field is required.',
            })}
          ></input>
        </label>
        <p className={styles.errorMessage}>{errors.username?.message}</p>

        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            {...register('password', {
              required: 'password field is required.',
              minLength: {
                value: 3,
                message: 'password must have a minimum length of 3.',
              },
              maxLength: {
                value: 15,
                message: 'password must have a maximum length of 15.',
              },
            })}
          ></input>
        </label>
        <p className={styles.errorMessage}>{errors.password?.message}</p>

        <button className={styles.button} type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;

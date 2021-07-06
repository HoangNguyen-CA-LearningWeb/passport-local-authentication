import { useState } from 'react';
import styles from '../styles.module.css';
import { registerUser } from '../../../actions';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const RegisterForm = () => {
  const [error, setError] = useState('');
  const history = useHistory();

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

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data.username, data.password);
      alert(`user created: ${JSON.stringify(user)}`);
      history.push('/login');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
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
  );
};

export default RegisterForm;

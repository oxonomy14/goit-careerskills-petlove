import css from './LoginForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/AuthOperations';
import {
  selectIsLoading,
  selectError,
  selectIsLoggedIn,
} from '../../redux/auth/AuthSelector';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';

import Title from '../../components/Title/Title';

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
 
    email: Yup.string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid email format',
      )
      .required('Required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Required'),
    
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;

    try {
      await dispatch(
        login({
          email,
          password,
        }),
      ).unwrap();

      actions.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={css.wrap}>
      <Title>Log in</Title>
      <p className={css.welcome}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <Formik
        initialValues={{
         
          email: '',
          password: '',
          
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <div className={css.formItem}>
              <div className={css.inputWrap}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`${css.field} 
        ${
          errors.email && touched.email
            ? css.fieldError
            : touched.email && !errors.email && values.email
              ? css.fieldSuccess
              : ''
        }`}
                />
                {/* Червоний хрестик */}
                {errors.email && touched.email && (
                  <button
                    type="button"
                    className={css.clearBtn}
                    onClick={() => setFieldValue('email', '')}
                  >
                    <svg className={css.errorIcon}>
                      <use href="/icons/sprite.svg#icon-x" />
                    </svg>
                  </button>
                )}

                {/* Зелена галочка */}
                {touched.email && !errors.email && values.email && (
                  <div className={css.successIcon}>
                    <svg className={css.checkIcon}>
                      <use href="/icons/sprite.svg?v=${Date.now()}#icon-check" />
                    </svg>
                  </div>
                )}
              </div>
              <ErrorMessage
                name="email"
                className={css.error}
                component="div"
              />
            </div>
            <div className={css.formItem}>
              <div className={css.inputWrap}>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className={`${css.field} 
        ${
          errors.password && touched.password
            ? css.fieldError
            : touched.password && !errors.password && values.password
              ? css.fieldSuccess
              : ''
        }`}
                />
                {/* Червоний хрестик */}
                {errors.password && touched.password && (
                  <button
                    type="button"
                    className={css.clearBtnPassword}
                    onClick={() => setFieldValue('password', '')}
                  >
                    <svg className={css.errorIcon}>
                      <use href="/icons/sprite.svg#icon-x" />
                    </svg>
                  </button>
                )}

                {/* Зелена галочка */}
                {touched.password && !errors.password && values.password && (
                  <div className={css.successIconPassword}>
                    <svg className={css.checkIcon}>
                      <use href="/icons/sprite.svg?v=${Date.now()}#icon-check" />
                    </svg>
                  </div>
                )}
                <button
                  type="button"
                  className={css.eyeBtn}
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  <svg className={css.eyeIcon}>
                    <use
                      href={
                        showPassword
                          ? '/icons/sprite.svg?v=${Date.now()}#icon-eye-off'
                          : '/icons/sprite.svg?v=${Date.now()}#icon-eye'
                      }
                    />
                  </svg>
                </button>
              </div>
              <ErrorMessage
                name="password"
                className={css.error}
                component="div"
              />
            </div>

            <button className={css.btnLogIn} type="submit" disabled={isLoading}>
             {isLoading ? 'Loading...' : 'Log in'}
            </button>
             
            <p className={css.text}>
              Don’t have an account?{' '}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>
                {error && <p className={css.error}>{error}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from "react";

import Title from '../../components/Title/Title';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/AuthOperations';
import { selectIsLoading, selectError, selectIsLoggedIn } from '../../redux/auth/AuthSelector';

const RegistrationForm = () => {

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!').required('Required'),
      email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Required'),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });
    
const navigate = useNavigate();
    const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
const isLoggedIn = useSelector(selectIsLoggedIn);

    const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

const handleSubmit = async (values, actions) => {
  const { username, email, password } = values;

  try {
    await dispatch(
      register({
        name: username,
        email,
        password,
      })
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
    console.log('isLoggedIn:', isLoggedIn);
}, [isLoggedIn, navigate]);

  return (
    <div className={css.wrap}>
      <Title>Registration</Title>
      <p className={css.thankYou}>
        Thank you for your interest in our platform.{' '}
      </p>
      <Formik initialValues={{username: "", email:"", password:"", confirmPassword:""}} validationSchema={validationSchema} onSubmit={handleSubmit}>
         {({ errors, touched, setFieldValue, values  }) => (
        <Form>
            <div className={css.formItem}>
                 <div className={css.inputWrap}>
   <Field
            type="text"
            name="username"
            placeholder="Name"
            className={`${css.field} 
        ${
          errors.username && touched.username
            ? css.fieldError
            : touched.username && !errors.username && values.username
            ? css.fieldSuccess
            : ""
        }`}
       
          />
          {/* Червоний хрестик */}
    {errors.username && touched.username && (
      <button
        type="button"
        className={css.clearBtn}
        onClick={() => setFieldValue("username", "")}
      >
        <svg className={css.errorIcon}>
          <use href="/icons/sprite.svg#icon-x" />
        </svg>
      </button>
    )}

    {/* Зелена галочка */}
    {touched.username && !errors.username && values.username && (
      <div className={css.successIcon}>
        <svg className={css.checkIcon}>
          <use href="/icons/sprite.svg?v=${Date.now()}#icon-check" />
        </svg>
      </div>
    )}
          </div>
  <ErrorMessage name="username" className={css.error} component="div"/>
  
</div>
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
            : ""
        }`}
          />
            {/* Червоний хрестик */}
    {errors.email && touched.email && (
      <button
        type="button"
        className={css.clearBtn}
        onClick={() => setFieldValue("email", "")}
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
            <ErrorMessage name="email" className={css.error} component="div"/>
</div>
    <div className={css.formItem}>
         <div className={css.inputWrap}>
          <Field
             type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={`${css.field} 
        ${
          errors.password && touched.password
            ? css.fieldError
            : touched.password && !errors.password && values.password
            ? css.fieldSuccess
            : ""
        }`}
          />
            {/* Червоний хрестик */}
    {errors.password && touched.password && (
      <button
        type="button"
        className={css.clearBtnPassword}
        onClick={() => setFieldValue("password", "")}
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
              ? "/icons/sprite.svg?v=${Date.now()}#icon-eye-off"
              : "/icons/sprite.svg?v=${Date.now()}#icon-eye"
          }
        />
      </svg>
    </button>
          </div>
             <ErrorMessage name="password" className={css.error} component="div"/>
          </div>
              <div className={css.formItem}>
                   <div className={css.inputWrap}>
          <Field
             type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`${css.field} 
        ${
          errors.confirmPassword && touched.confirmPassword
            ? css.fieldError
            : touched.confirmPassword && !errors.confirmPassword && values.confirmPassword
            ? css.fieldSuccess
            : ""
        }`}
          />
              <button
      type="button"
      className={css.eyeBtn}
      onClick={() => setShowConfirm(prev => !prev)}
    >
         {/* Червоний хрестик */}
    {errors.confirmPassword && touched.confirmPassword && (
      <button
        type="button"
        className={css.clearBtnPassword}
        onClick={() => setFieldValue("confirmPassword", "")}
      >
        <svg className={css.errorIcon}>
          <use href="/icons/sprite.svg#icon-x" />
        </svg>
      </button>
    )}

    {/* Зелена галочка */}
    {touched.confirmPassword && !errors.confirmPassword && values.confirmPassword && (
      <div className={css.successIconPassword}>
        <svg className={css.checkIcon}>
          <use href="/icons/sprite.svg?v=${Date.now()}#icon-check" />
        </svg>
      </div>
    )}
      <svg className={css.eyeIcon}>
        <use
          href={
            showConfirm
              ? "/icons/sprite.svg?v=${Date.now()}#icon-eye-off"
              : "/icons/sprite.svg?v=${Date.now()}#icon-eye"
          }
        />
      </svg>
    </button>
          </div>
                <ErrorMessage name="confirmPassword" className={css.error} component="div"/>
          </div>
       <button className={css.btnReg} type="submit" disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Registration'}
</button>
          <p className={css.text}>Already have an account? <Link to="/login"><span>Login</span></Link></p>

          {error && <p className={css.error}>{error}</p>}
        </Form>
         )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

import css from "./LoginForm.module.css";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from "react";

import Title from '../../components/Title/Title';

const LoginForm = () => {
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
    
        const [showPassword, setShowPassword] = useState(false);

    
    const handleSubmit=(values,actions)=> {
      console.log({values, actions});
      actions.resetForm();
    };

    return (
        <div className={css.wrap}>
      <Title>Log in</Title>
      <p className={css.welcome}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <Formik initialValues={{username: "", email:"", password:"", confirmPassword:""}} validationSchema={validationSchema} onSubmit={handleSubmit}>
         {({ errors, touched, setFieldValue, values  }) => (
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
            
          <button className={css.btnLogIn} type="submit">Log in</button>
          <p className={css.text}>Don’t have an account?  <Link to="/register"><span>Register</span></Link></p>
        </Form>
         )}
      </Formik>
    </div>
  

    );
}

export default LoginForm;
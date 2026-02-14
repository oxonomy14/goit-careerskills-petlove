import React from 'react';
import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/DefaultContainer';

const NotFound = () => {
  return (
    <Container>
      <section>
        <div className={css.wrapper}>
          <div className={css.error}>4 <div className={css.imgWrapper}><img src="img/404.png" alt="404 error" /></div> 4</div>
          <p className={css.text}>Ooops! This page not found :(</p>
          <Link className={css.link} to="/">To home page</Link>
          </div>
      </section>
    </Container>
  );
};

export default NotFound;

import React from 'react';
import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';


const NotFound = () => {
  return (
    <section>
         <Container>
      <div className={css.wrapper}>
      <div>
        <h3 className={css.subTitle}>Such page does not exist</h3>
        </div>
        <div className={css.btnGoBack}>
          <Link className={css.btnText} to="/catalog">
            Go To Catalog Page
          </Link>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default NotFound;

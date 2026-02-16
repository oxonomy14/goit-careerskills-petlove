import Title from '../../components/Title/Title';
import css from './NoticesPage.module.css';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import NoticesListItem from '../../components/NoticesItem/NoticesItem';
import Pagination from '../../components/Pagination/Pagination';

const NoticesPage = () => {
  return (
    <>
      <section className={css.section}>
        <div className={css.title}>
          <Title>Find your favorite pet</Title>
        </div>
        <div className={css.noticesFilters}>
          <NoticesFilters />
        </div>
        <div className={css.noticesList}>
          <NoticesList>
            <NoticesListItem />
          </NoticesList>
        </div>
        <div>
            <Pagination/>
        </div>
      </section>
    </>
  );
};

export default NoticesPage;

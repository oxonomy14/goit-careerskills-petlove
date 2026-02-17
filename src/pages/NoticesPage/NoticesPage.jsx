import Title from '../../components/Title/Title';
import css from './NoticesPage.module.css';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import NoticesListItem from '../../components/NoticesItem/NoticesItem';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotices } from '../../redux/notices/noticesOperations';
import {
  selectNotices,
  selectNoticesError,
  selectNoticesLoading,
  selectTotalPages,
  selectPage,
  selectKeyword,
} from '../../redux/notices/noticesSelectors';
import { setPage, setKeyword } from '../../redux/notices/noticesSlice';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesLoading);
  const error = useSelector(selectNoticesError);
  const page = useSelector(selectPage);
  const keyword = useSelector(selectKeyword);
  const totalPages = useSelector(selectTotalPages);
  //  const state = useSelector(state => state.noticesList);
  //console.log('state', state);

  useEffect(() => {
    dispatch(fetchNotices({ page, keyword }));
  }, [dispatch, page, keyword]);

  useEffect(() => {
  console.log('notices', notices);
}, [notices]);

  {
    isLoading && <p>Loading...</p>;
  }
  if (error) return <p>Error: {error}</p>;

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
            {notices.map(notice => (
              <NoticesListItem key={notice._id} notice={notice} />
            ))}
          </NoticesList>
        </div>
        <div>
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={p => dispatch(setPage(p))}
          />
        </div>
      </section>
    </>
  );
};

export default NoticesPage;

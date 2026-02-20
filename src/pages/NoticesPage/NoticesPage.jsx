import Title from '../../components/Title/Title';
import css from './NoticesPage.module.css';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import NoticesListItem from '../../components/NoticesItem/NoticesItem';
import Pagination from '../../components/Pagination/Pagination';
import ModalAttention from '../../components/ModalAttention/ModalAttention';
import ModalNotice from '../../components/ModalNotice/ModalNotice';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';
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
import { selectIsLoggedIn } from '../../redux/auth/AuthSelector';
import { setPage, setKeyword } from '../../redux/notices/noticesSlice';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesLoading);
  const error = useSelector(selectNoticesError);
  const page = useSelector(selectPage);
  const keyword = useSelector(selectKeyword);
  const totalPages = useSelector(selectTotalPages);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    dispatch(fetchNotices({ page, keyword }));
  }, [dispatch, page, keyword]);

  useEffect(() => {
    console.log('notices', notices);
  }, [notices]);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={css.sectionNoticesPage}>
          <div className={css.title}>
            <Title>Find your favorite pet</Title>
          </div>
          <div className={css.noticesFilters}>
            <NoticesFilters 
            setKeyword={setKeyword}
            setPage={setPage}

            />
          </div>
          <div className={css.noticesList}>
            <NoticesList>
              {notices.map(notice => (
                <NoticesListItem
                  key={notice._id}
                  notice={notice}
                  onOpen={() => {
                    setSelectedNotice(notice);
                    setIsOpen(true);
                  }}
                />
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
          {isLoggedIn ? (
            <ModalNotice
              isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
                setSelectedNotice(null);
              }}
              notice={selectedNotice}
              notices={notices}
            />
          ) : (
            <ModalAttention isOpen={isOpen} onClose={() => setIsOpen(false)} />
          )}
        </section>
      )}
    </>
  );
};

export default NoticesPage;

import css from './NewsPage.module.css';
import Container from '../../components/Container/DefaultContainer';
import Title from '../../components/Title/Title';
import NewsList from '../../components/NewsList/NewsList';
import NewsItem from '../../components/NewsItem/NewsItem';
import SearchField from '../../components/SearchField/SearchField';
import Pagination from '../../components/Pagination/Pagination';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/news/newsOperations';
import {
  selectNewsByPage,
  selectNewsLoading,
  selectNewsError,
  selectTotalPages,
  selectPage,
  selectKeyword
} from '../../redux/news/newsSelectors';
import { setPage, setKeyword } from '../../redux/news/newsSlice';


const NewsPage = () => {
  const dispatch = useDispatch();
    const page = useSelector(selectPage);
   const keyword = useSelector(selectKeyword);
  const newsItem = useSelector(state => selectNewsByPage(state, page));
  const isLoading = useSelector(selectNewsLoading);
  const error = useSelector(selectNewsError);
  const totalPages = useSelector(selectTotalPages);




useEffect(() => {
    dispatch(fetchNews({ page, keyword }));
  }, [dispatch, page, keyword]);

  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Container>
        <section>
          <div className={css.rowTitle}>
            <div>
              <Title>News</Title>
            </div>
            <div>
              <SearchField 
                onSubmit={q => {
    dispatch(setPage(1));
    dispatch(setKeyword(q));
  }}
  onClear={() => {
    dispatch(setPage(1));
    dispatch(setKeyword(''));  }}
  />
            </div>
          </div>
          <div className={css.newslist}>
            <NewsList>
              {newsItem.map(item => (
                <NewsItem key={item._id} item={item} />
              ))}
            </NewsList>
          </div>
          <div className={css.paginationBox}>
            <Pagination
               page={page}
  totalPages={totalPages}
  onChange={(p) => dispatch(setPage(p))}
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default NewsPage;

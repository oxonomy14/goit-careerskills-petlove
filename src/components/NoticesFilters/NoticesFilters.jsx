import SearchField from '../SearchField/SearchField';
import css from './NoticesFilters.module.css';
import { useDispatch } from 'react-redux';

const NoticesFilters = ({setPage, setKeyword}) => {
    const dispatch = useDispatch();
    return (<>
    <div className={css.filtersWrapper}>
    <div className={css.filters}>
<div className={css.searchFieldWrapper}><SearchField 
onSubmit={q => {
    dispatch(setPage(1));
    dispatch(setKeyword(q));
  }}
  onClear={() => {
    dispatch(setPage(1));
    dispatch(setKeyword(''));  }}
    /></div>
    </div>
    <div></div>
    
    </div>
    </>);
};

export default NoticesFilters;
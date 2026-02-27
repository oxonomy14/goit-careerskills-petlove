import SearchField from '../SearchField/SearchField';
import CategoryField from '../CategoryField/CategoryField';
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

<div className={css.categoryFieldWrapper}><CategoryField/></div>














    </div>
    <div>нижняя строка</div>
    
    </div>
    </>);
};

export default NoticesFilters;